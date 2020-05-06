// pages/salary/college/college.js
const db = wx.cloud.database()
const _ = db.command
const collegeProfessionDB = db.collection('CollegeProfession')
const collegeDB = db.collection('UndergraduateCollege')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    items: []
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })  
    this.getCollegeSalary()
  },

  getCollegeSalary(){
    let college = this.data.items[this.data.TabCur].college
    collegeDB.where({
      "college": college
    }).orderBy('year', "desc")
    .get().then((res)=>{
      console.log(res.data)
      this.setData({
        collegeSalary: res.data
      })
    })
  },

  getData(){
    collegeProfessionDB.orderBy("year", 'desc').get().then((res)=>{
      let items = res.data
      this.setData({
        items
      })
      this.getCollegeSalary()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()

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