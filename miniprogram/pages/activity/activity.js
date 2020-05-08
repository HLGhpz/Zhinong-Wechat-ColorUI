// pages/activity/activity.js
const db = wx.cloud.database()
const _ = db.command
const activityDB = db.collection('Activity')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.reqActivity();
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
  onShareAppMessage() {
    return {
      title: '要知华农，尽在知侬',
      path: '/pages/activity/activiry'
    }
  },
  /**
   * 请求Activity数据库,获取数据
   */
  reqActivity: function() {
    activityDB.orderBy('activityNumber', 'desc')
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          activity: res.data
        })
      })
  }
})