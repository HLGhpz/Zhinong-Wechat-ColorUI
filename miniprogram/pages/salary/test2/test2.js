import uCharts from '../../ucharts/u-charts.js';
var _self;
var canvaColumn = null;
var canvaLineA = null;
var canvaCandle = null;
Page({
  data: {
    cWidth: '',
    cHeight: '',
  },
  onLoad: function () {
    _self = this;
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    this.getServerData();
  },
  getServerData: function () {
    wx.request({
      url: 'https://www.ucharts.cn/data.json',
      data: {
      },
      success: function (res) {
        console.log(res.data.data)
        let Column = { categories: [], series: [] };
        Column.categories = res.data.data.ColumnB.categories;
        Column.series = res.data.data.ColumnB.series;
        //自定义标签颜色和字体大小
        Column.series[1].textColor = 'red';
        Column.series[1].textSize = 18;
        let LineA = { categories: [], series: [] };
        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
        LineA.categories = res.data.data.LineA.categories;
        LineA.series = res.data.data.LineA.series;
        let Candle = { categories: [], series: [] };
        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
        Candle.categories = res.data.data.Candle.categories;
        Candle.series = res.data.data.Candle.series;
        _self.showColumn("canvasColumn", Column);
        _self.showLineA("canvasLineA", LineA);
        _self.showCandle("canvasCandle", Candle);
      },
      fail: () => {
        console.log("请点击右上角【详情】，启用不校验合法域名");
      },
    });
  },
  showColumn(canvasId, chartData) {
    canvaColumn = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'column',
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio: 1,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {
        //disabled:true
      },
      dataLabel: true,
      width: _self.cWidth,
      height: _self.cHeight,
      extra: {
        column: {
          type: 'group',
          width: _self.cWidth * 0.45 / chartData.categories.length
        }
      }
    });

  },
  touchColumn(e) {
    canvaColumn.showToolTip(e, {
      format: function (item, category) {
        if (typeof item.data === 'object') {
          return category + ' ' + item.name + ':' + item.data.value
        } else {
          return category + ' ' + item.name + ':' + item.data
        }
      }
    });
  },
  showLineA(canvasId, chartData) {
    canvaLineA = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'line',
      fontSize: 11,
      legend: true,
      dataLabel: true,
      dataPointShape: true,
      background: '#FFFFFF',
      pixelRatio: 1,
      categories: chartData.categories,
      series: chartData.series,
      animation: true,
      enableScroll: true,//开启图表拖拽功能
      xAxis: {
        disableGrid: false,
        type: 'grid',
        gridType: 'dash',
        itemCount: 4,
        scrollShow: true,
        scrollAlign: 'left',
        //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
        //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
      },
      yAxis: {
        //disabled:true
        gridType: 'dash',
        splitNumber: 8,
        min: 10,
        max: 180,
        format: (val) => { return val.toFixed(0) + '元' }//如不写此方法，Y轴刻度默认保留两位小数
      },
      width: _self.cWidth,
      height: _self.cHeight,
      extra: {
        line: {
          type: 'straight'
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
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  showCandle(canvasId, chartData) {
    canvaCandle = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'candle',
      fontSize: 11,
      legend: true,
      background: '#FFFFFF',
      pixelRatio: 1,
      categories: chartData.categories,
      series: chartData.series,
      animation: true,
      enableScroll: true,
      xAxis: {
        disableGrid: true,
        itemCount: 20,
        scrollShow: true,
        scrollAlign: 'right',
        labelCount: 4,
      },
      yAxis: {
        //disabled:true
        gridType: 'dash',
        splitNumber: 5,
        format: (val) => {
          return val.toFixed(0)
        }
      },
      width: _self.cWidth,
      height: _self.cHeight,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        candle: {
          color: {
            upLine: '#f04864',
            upFill: '#f04864',
            downLine: '#2fc25b',
            downFill: '#2fc25b'
          },
          average: {
            show: true,
            name: ['MA5', 'MA10', 'MA30'],
            day: [5, 10, 30],
            color: ['#1890ff', '#2fc25b', '#facc14']
          }
        },
        tooltip: {
          bgColor: '#000000',
          bgOpacity: 0.7,
          gridType: 'dash',
          dashLength: 5,
          gridColor: '#1890ff',
          fontColor: '#FFFFFF',
          horizentalLine: true,
          xAxisLabel: true,
          yAxisLabel: true,
          labelBgColor: '#DFE8FF',
          labelBgOpacity: 0.95,
          labelAlign: 'left',
          labelFontColor: '#666666'
        }
      },
    });

  },
  touchCandle(e) {
    canvaCandle.scrollStart(e);
  },
  moveCandle(e) {
    canvaCandle.scroll(e);
  },
  touchEndCandle(e) {
    canvaCandle.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaCandle.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
})
