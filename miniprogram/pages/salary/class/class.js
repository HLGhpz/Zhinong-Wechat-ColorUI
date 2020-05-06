const db = wx.cloud.database()
const _ = db.command
const yearDB = db.collection('Years')
const classSalaryDB = db.collection('ClassSalary')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showChart: false,
    initChart: null,
    TabCur: 0
  },

  /**
   * 年份选择
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
    })
    this.getClassSalary()
  },

  /**
   * 获取初始的年份数据
   */
  getYearData() {
    yearDB.orderBy('year', 'desc').get().then(res => {
      this.setData({
        years: res.data
      })
      this.getClassSalary()
    })
  },

  /**
   * 获取年份对应的月薪情况
   */
  async getClassSalary() {
    let year = this.data.years[this.data.TabCur].year
    console.log(year)
    const reqSalary = await classSalaryDB.where({
        year
      })
      .orderBy("meanVale", "desc")
      .get()
    const data = reqSalary.data
    console.log(data)

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
    chart.interval().position('classesAlias*meanVale').color('classesAlias');
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getYearData();
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