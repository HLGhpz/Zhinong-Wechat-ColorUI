import uCharts from '../../ucharts/u-charts.js';
var _self;
var canvaColumn = null;
var canvaLineA = null;
var canvaCandle = null;
const db = wx.cloud.database()
const _ = db.command
const classDB = db.collection('ClassSalary')
const yearDB = db.collection('Years')

Page({
  data: {
    cWidth: '',
    cHeight: '',
    TabCur: 0
  },
  onLoad: function() {
    _self = this;
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    yearDB.orderBy('year', 'desc').get().then(res => {
      this.setData({
        years: res.data
      })
      this.getServerData();
    })
  },

  /**
   * 年份选择
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
    this.getServerData()
  },

  getServerData: function() {
    let data = {
      meanVale: [],
      standVale: []
    }
    let LineA = {
      categories: [],
      series: []
    };
    console.log(this.data.years[this.data.TabCur])
    classDB.where({
        year: this.data.years[this.data.TabCur].year
      })
      .orderBy('meanVale', 'desc')
      .get()
      .then((res) => {
        console.log(res)
        res.data.forEach((elem, index) => {
          data.meanVale.push(elem.meanVale)
          data.standVale.push(elem.standardDeviation)
          LineA.categories.push(elem.classesAlias)
        })
        LineA.series = [{
            name: "月薪",
            data: data.meanVale,
            color: "#1892EF",
          },
          {
            name: "标准差",
            data: data.standVale,
            color: "#FFCF10",
          }
        ]
        console.log(LineA)
        _self.showLineA("canvasLineA", LineA);
      })
  },
  showLineA(canvasId, chartData) {
    canvaLineA = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'column',
      fontSize: 11,
      legend: true,
      dataLabel: true,
      // dataPointShape: true,
      background: '#FFFFFF',
      pixelRatio: 1,
      categories: chartData.categories,
      series: chartData.series,
      animation: true,
      enableScroll: true, //开启图表拖拽功能
      // rotate: true,
      xAxis: {
        disableGrid: true,
        // type: 'grid',
        // gridType: 'dash',
        itemCount: 5,
        scrollShow: true,
        scrollAlign: 'left',
        //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
        //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
      },
      yAxis: {
        //disabled:true
        gridType: 'dash',
        splitNumber: 4,
        min: 0,
        max: chartData.series[0].data[0] * 1.2,
        format: (val) => {
          return val.toFixed(0) + '元'
        } //如不写此方法，Y轴刻度默认保留两位小数
      },
      width: _self.cWidth,
      height: _self.cHeight,
      extra: {
        column: {
          type: 'meter',
          width: 40,
          meter: {
            border: 2,
            fillColor: '#E5FDC3'
          }
        }
      },
    });

  },
  touchLineA(e) {
    canvaLineA.scrollStart(e);
  },
  moveLineA(e) {
    canvaLineA.scroll(e);
  },
  touchEndLineA(e) {
    canvaLineA.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaLineA.showToolTip(e, {
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  }
})