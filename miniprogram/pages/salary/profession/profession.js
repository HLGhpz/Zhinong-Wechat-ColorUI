// pages/salary/college/college.js
const db = wx.cloud.database()
const _ = db.command
const collegeProfessionDB = db.collection('CollegeProfession')
const professionDB = db.collection('UndergraduateProfession')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: 0
  },

  /**
   *   左侧导航点击时，触发的事件
   */
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
      activeId: null
    });
  },

  /**
   *   右侧选择项被点击时，会触发的事件
   */
  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({ activeId });
    this.getSalary()
  },

  getSalary(){
    let profession = this.data.items[this.data.mainActiveIndex].children[this.data.activeId].text
    professionDB.where({
      "profession": profession
    }).orderBy('year', "desc")
    .get().then((res)=>{
      console.log(res.data)
      this.setData({
        professionSalary: res.data
      })
    })
  },

  getData(){
    collegeProfessionDB.get().then((res)=>{
      console.log(res.data)
      let items = []
      
      res.data.forEach((elem, index)=>{
        let text = elem.college;
        let children = []
        elem.profession.forEach((elem, index)=>{
          children.push({"text": elem, "id": index})
          // console.log(elem)
        })
        items.push({"text": elem.college, "children": children})
      })
      this.setData({
        items
      })
      this.getSalary()
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