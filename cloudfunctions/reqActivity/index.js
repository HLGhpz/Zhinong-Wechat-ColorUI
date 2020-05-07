// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const rp = require('request-promise');
const cheerio = require('cheerio');
const db = cloud.database()
const _ = db.command
const selectActivePath = 'div.zy-mainxrx ul li'
const imgBaseUrl = 'http://www.hzau.edu.cn/'

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  const options = {
    url: 'http://www.hzau.edu.cn/hdyg.htm'
  }
  mianActivity()
}

// 主函数
async function mianActivity() {
  console.log("mianActivity")
  let lastActivity = await db.collection('Activity')
    .orderBy('activityNumber', 'desc')
    .limit(1)
    .get()
  let lastNumber = lastActivity.data[0].activityNumber
  console.log("after activityNumber", lastNumber)
  // return lastNumber
  // let html = await rp('http://www.hzau.edu.cn/hdyg.htm')
  // console.log("after rp")
  // let $ = cheerio.load(html)
  // // 遍历数组
  // $(selectActivePath).each((index, elem) => {
  //   let elemLink = $('a', $(elem)).attr('href')
  //   let elemNumber = parseInt(elemLink.match(/\d+/g)[1])
  //   if (elemNumber > lastNumber) {
  //     console.log(elemNumber)
  //     getNewActivityData($, elem, elemLink, elemNumber)
  //       .then((res)=>{
  //         console.log(res)
  //       }
  //     )
  //   }
  // })
};

// 获取数据库中最新的一条数据
// async function getLatestNumber() {
//   const activityData = await db.collection('Activity').orderBy("activityNumber", "desc").limit(1).get()
//   return activityData[0].activityNumber
// };

// 获取更新的数据
async function getNewActivityData($, elem, elemLink, elemNumber) {
  let activityLink = imgBaseUrl + elemLink.replace("../", "").replace("../", "")
  let activityTitle = $('a', $(elem)).text()
  let activityTime = $('small', $(elem)).text()
  let activitySponsor = $('span', $(elem)).text()
  let activityNumber = elemNumber;
  console.log("before await")
  let imgHtml = await rp(activityLink)
  console.log("getNewActivityData")
  let soup = cheerio.load(imgHtml)
  activityImg = soup('div.v_news_content p img').attr('src')
  console.log({
    activityTitle,
    activityTime,
    activitySponsor,
    activityNumber,
    activityImg
  })
  return {
    activityTitle,
    activityTime,
    activitySponsor,
    activityNumber,
    activityImg
  }
}

// function getNewActivityData($, elem, elemLink, elemNumber) {
//   let activityLink = imgBaseUrl + elemLink.replace("../", "").replace("../", "")
//   let activityTitle = $('a', $(elem)).text()
//   let activityTime = $('small', $(elem)).text()
//   let activitySponsor = $('span', $(elem)).text()
//   let activityNumber = elemNumber;
//   return {
//     activityTitle,
//     activityTime,
//     activitySponsor,
//     activityNumber
//   }
// }