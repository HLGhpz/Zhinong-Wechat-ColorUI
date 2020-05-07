// pages/salary/college/college.js
import uCharts from '../../ucharts/u-charts.js';
var canvaClass = null;
const db = wx.cloud.database()
const _ = db.command
const collegeProfessionDB = db.collection('CollegeProfession')
const collegeDB = db.collection('UndergraduateCollege')
var _self
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cWidth: '',
    cHeight: '',
    TabCur: 0,
    scrollLeft: 0,
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _self = this;
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    collegeProfessionDB.orderBy("year", 'desc').get().then((res) => {
      let items = res.data
      this.setData({
        items
      })
      this.getServerData()
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    this.getServerData()
  },

  getServerData: function() {
    let data = {
      monthlySalary: [],
      monthlySalaryOneYear: []
    }
    let CanvaClass = {
      categories: [],
      series: []
    };
    collegeDB.where({
        college: this.data.items[this.data.TabCur].college
      })
      .orderBy('year', 'desc')
      .get()
      .then((res) => {
        this.setData({
          collegeSalary: res.data
        })
        res.data.forEach((elem, index) => {
          data.monthlySalary.push(elem.monthlySalary)
          data.monthlySalaryOneYear.push(elem.monthlySalaryOneYear)
          CanvaClass.categories.push(elem.year)
        })
        CanvaClass.series = [{
            name: "一年后月薪",
            data: data.monthlySalaryOneYear,
            color: "#FFCF10",
          },
          {
            name: "月薪",
            data: data.monthlySalary,
            color: "#1892EF",
          }
        ]
        _self.showLineA("canvasLineA", CanvaClass);
      })
  },
  showLineA(canvasId, chartData) {
    canvaClass = new uCharts({
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
        max: chartData.series[0].data[2] * 1.3,
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
    canvaClass.scrollStart(e);
  },
  moveLineA(e) {
    canvaClass.scroll(e);
  },
  touchEndLineA(e) {
    canvaClass.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaClass.showToolTip(e, {
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },

  // getCollegeSalary() {
  //   let college = this.data.items[this.data.TabCur].college
  //   collegeDB.where({
  //       "college": college
  //     }).orderBy('year', "desc")
  //     .get().then((res) => {
  //       console.log(res.data)
  //       this.setData({
  //         collegeSalary: res.data
  //       })
  //     })
  // },

  // getData() {
  //   collegeProfessionDB.orderBy("year", 'desc').get().then((res) => {
  //     let items = res.data
  //     this.setData({
  //       items
  //     })
  //     this.getCollegeSalary()
  //   })
  // },

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