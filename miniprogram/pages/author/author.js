// pages/author/author.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
  showQrcode() {
    wx.previewImage({
      urls: ['https://i.loli.net/2020/05/07/UmQfBc51ZHPLFbk.png'],
      current: 'https://i.loli.net/2020/05/07/UmQfBc51ZHPLFbk.png' // 当前显示图片的http链接      
    })
  },
  showPublic() {
    wx.previewImage({
      urls: ['https://i.loli.net/2020/05/07/vFJcDz7BYU5fqe3.jpg'],
      current: 'https://i.loli.net/2020/05/07/vFJcDz7BYU5fqe3.jpg' // 当前显示图片的http链接      
    })
  },
})