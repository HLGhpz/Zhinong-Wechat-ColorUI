const db = wx.cloud.database()
const _ = db.command
const yearDB = db.collection('Years')
const classSalaryDB = db.collection('ClassSalary')
Page({
  data: {
    initChart: null,
    showChart: false,
    TabCur: 0
  },

  onLoad() {
    this.getYearData();
    // this.getClassSalary()
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
    // let year = 2016
    const reqSalary = await classSalaryDB.where({
        year
      })
      .orderBy("meanVale", "desc")
      .get()
    const data = reqSalary.data

    this.setData({
      initChart: (F2, config) => {
        this.renderChart(F2, config, data)
      },
      showChart: true
    })


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
   * 初始化图表
   */
  renderChart(F2, config, data) {
    const chart = new F2.Chart(config);
    chart.source(data);
    chart.coord({
      transposed: true
    });
    // chart.tooltip({
    //   showItemMarker: false,
    //   onShow: function onShow(ev) {
    //     const items = ev.items;
    //     items[0].name = null;
    //     items[0].name = items[0].title;
    //     items[0].value = '¥ ' + items[0].value;
    //   }
    // });
    chart.interval().position('classesAlias*meanVale').color('classesAlias');
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }
});