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

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    cWidth: '',
    cHeight: '',
  },

  /**
   * 年份选择
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
    })
    this.getServerData()
  },

  /**
   * 获取初始的年份数据
   */
  getYearData() {
    yearDB.orderBy('year', 'desc').get().then(res => {
      this.setData({
        years: res.data
      })
      this.getServerData()
    })
  },

  /**
   * 获取年份对应的月薪情况
   */
  // async getClassSalary() {
  //   let year = this.data.years[this.data.TabCur].year
  //   console.log(year)
  //   const reqSalary = await classSalaryDB.where({
  //       year
  //     })
  //     .orderBy("meanVale", "desc")
  //     .get()
  //   const data = reqSalary.data
  //   console.log(data)

  //   this.setData({
  //     initChart: (F2, config) => {
  //       this.renderChart(F2, config, data)
  //     },
  //     chartShow: true
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    _self = this;
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    this.getYearData();
    // this.getServerData();
  },

  /**
   * 获取月薪数据
   */
  getServerData: function() {
    let data = {
      meanVale: [],
      standVale: []
    }
    let LineA = {
      categories: [],
      series: []
    };
    classDB.where({
        year: 2016
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

  /**
   * 图表初始化
   */
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

  /**
   * 触摸图表
   */
  touchLineA(e) {
    canvaLineA.scrollStart(e);
  },

  /**
   * 移动图表
   */
  moveLineA(e) {
    canvaLineA.scroll(e);

  },
  /**
   * 
   */
  touchEndLineA(e) {
    canvaLineA.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaLineA.showToolTip(e, {
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})