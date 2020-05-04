// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const rp = require('request-promise');
const cheerio = require('cheerio');
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  const options = {
    url: 'http://www.hzau.edu.cn/hdyg.htm'
  }

  async function getLatestNumber() {
    const activityData = await db.collection('Activity').orderBy("activityNumber", "desc").limit(1).get()
    return activityData[0].activityNumber
  }

  async function upActivityData() {
    const activityNumber = await getLastNumber()
    reqActivity(activityNumber)
  }

  async function reqActivity(lastNumber) {
    let html = await rp(options)
    $ = cheerio.load(html)
    $(selectActivePath).each(
      if()
    )

  }

  const data = await getLatestNumber()
  return data
}