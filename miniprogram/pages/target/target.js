// pages/target/target.js
const db = wx.cloud.database()
const _ = db.command
const exams = db.collection('ExamDafault')
const target = db.collection('Target')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 1,
    scrollLeft: 0,
    examDafault: [],
    target: [],
    targetDate: "",
    targetName: "",
    targetIntro: "",
    targetDate: new Date().toLocaleDateString().replace(/\//g, '-'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.reqDafaultExam();
    this.reqTarget();
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
    this.reqTarget().then(wx.stopPullDownRefresh())
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

  /**
   * 监听var点击数据
   */
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  /**
   * 请求ExamDafault数据库,获取数据
   */
  reqDafaultExam: function() {
    exams.where({
        examTime: _.gte(new Date)
      }).orderBy('examTime', 'desc')
      .get()
      .then(res => {
        console.log(res.data)
        res.data.map((value, index) => {
          let nowDate = new Date
          let diffDate = value.examTime - nowDate
          let days = Math.floor(diffDate / (24 * 3600 * 1000))
          value.examTime = value.examTime.toLocaleDateString()
          value.countDown = days
        })
        this.setData({
          examDafault: res.data
        })
      })
  },

  /**
   * 请求Target数据库,获取数据
   */
  reqTarget: function() {
    target.get()
      .then(res => {
        console.log(res.data)
        res.data.map((value, index) => {
          let nowDate = new Date
          let diffDate = value.targetTime - nowDate
          let days = Math.floor(diffDate / (24 * 3600 * 1000))
          value.targetTime = value.targetTime.toLocaleDateString()
          value.countDown = days
        })
        console.log(res.data)
        this.setData({
          target: res.data
        })
      })
  },

  /**
   * 监听Target数据的提交
   */
  formSubmit(e) {
    console.log(e.detail.value)
    target.add({
      data: {
        creatTime: new Date,
        targetTime: new Date(e.detail.value.targetTime),
        targetIntro: e.detail.targetIntro,
        targetName: e.detail.value.targetName
      }
    }).then(res => {
      this.reqTarget()
    })
  },

  /**
   * 监听Target时间的输入
   */
  DateChange(e) {
    this.setData({
      targetDate: e.detail.value
    })
  },

  /**
   * 监听Target删除
   */
  onTargetClick(e) {
    // wx.startPullDownRefresh()
    console.log(e)
    target.doc(e.target.id).remove().then(wx.startPullDownRefresh())
  }

})