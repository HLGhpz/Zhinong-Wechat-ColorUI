const db = wx.cloud.database()
const _ = db.command
const classSalaryDB = db.collection('ClassSalary')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartShow: false,
    initChart: null,
    year: 2019,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getDate();
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

  },

  async getDate() {
    const reqSalary = await classSalaryDB.where({
        year: 2016
      })
      .orderBy("meanVale", "desc")
      .get()
    const data = reqSalary.data
    this.setData({
      initChart: (F2, config) => {
        this.renderChart(F2, config, data)
      },
      chartShow: true
    })
  },

  renderChart(F2, config, data) {
    const chart = new F2.Chart(config);
    chart.source(data);
    chart.coord({
      transposed: true
    })
    console.log(data)
    // chart.tooltip({
    //   showItemMarker: false,
    //   onShow: function onShow(ev) {
    //     console.log("tip")
    //     const items = ev.items;
    //     items[0].name = null;
    //     items[0].name = items[0].title;
    //     items[0].value = '¥ ' + items[0].value;
    //   }
    // });
    chart.interval().position('classesAlias*meanVale').color('classesAlias')
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }
})