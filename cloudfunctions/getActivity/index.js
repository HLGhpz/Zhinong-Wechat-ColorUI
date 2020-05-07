const cloud = require('wx-server-sdk')
cloud.init()
const rq = require('request-promise')
const cheerio = require('cheerio')
const selectActivePath = 'div.zy-mainxrx ul li'
const imgBaseUrl = 'http://www.hzau.edu.cn/'

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  let lastActivity = await db.collection('Activity')
    .orderBy('activityNumber', 'desc')
    .limit(1)
    .get()
  let lastNumber = lastActivity.data[0].activityNumber
  let html = await rq('http://www.hzau.edu.cn/hdyg.htm')
  let $ = cheerio.load(html)
  let data = []
  $(selectActivePath).each(function(index, elem) {
    let elemLink = $('a', $(elem)).attr('href')
    let elemNumber = parseInt(elemLink.match(/\d+/g)[1])
    if (elemNumber > lastNumber) {
      let activityLink = imgBaseUrl + elemLink.replace("../", "").replace("../", "")
      let activityTitle = $('a', $(elem)).text()
      let activityTime = $('small', $(elem)).text()
      let activitySponsor = $('span', $(elem)).text()
      let activityNumber = elemNumber;
      data.push({
        activityLink,
        activityTitle,
        activityTime,
        activitySponsor,
        activityNumber
      })
    }
  })
  for (let index in data) {
    let activityImg = []
    let imgHtml = await rq(data[index].activityLink)
    let $ = cheerio.load(imgHtml)
    let imgUrl = imgBaseUrl + $('div.v_news_content p img').attr('src').replace("/", "")
    activityImg.push(imgUrl)
    let activityData = {
      activityImg: activityImg,
      activityLink: data[index].activityLink,
      activityTitle: data[index].activityTitle,
      activityTime: data[index].activityTime,
      activitySponsor: data[index].activitySponsor,
      activityNumber: data[index].activityNumber
    }
    console.log(activityData)
    await db.collection('Activity').add({
      data: activityData
    })
  }
  return "OK"
}