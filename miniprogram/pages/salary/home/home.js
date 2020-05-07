const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
      title: '学院信息',
      img: 'https://i.loli.net/2020/05/07/Qx3z7BXZ8Uq1Soe.png',
      url: '/college/college'
    },
    {
      title: '专业信息',
      img: 'https://i.loli.net/2020/05/07/dynWkiIt8xP3wXA.png',
      url: '/profession/profession'
    },
    {
      title: '列表信息',
      img: 'https://i.loli.net/2020/05/07/rdGge4LMyNSlnRK.png',
      url: '/class/class'
    }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/salary' + e.currentTarget.dataset.url
      })
    },
  }
});