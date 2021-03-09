const express = require("express");
const apiRouter = express.Router();
const axios = require("axios"); //html로 웹자료를 get
const cheerio = require("cheerio"); //html을 JS로 변환

let $href = [];
axios
  .get(`https://sejong.korea.ac.kr/campuslife/facilities/dining/weeklymenu`)
  .then((response) => {
    const $ = cheerio.load(response.data);
    // $(".buttonGo floatR").each((index, item) => {
    //    menulink = item.attribs.href;
    // });
    links = $("a");
    $(links).each((i, link) => {
      //console.log(i + ' : ' + $(link).text() +': '+$(link).attr('href')+ '\n');
      if($(link).text() === '교직원식당 주간 메뉴') $href.push($(link).attr('href'));
    });
    console.log('https://sejong.korea.ac.kr' + $href);
  });

apiRouter.post("/menu", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "금주의 교직원 식당 식단표입니다",
            description: "웹사이트에서 교직원식당 주간 메뉴를 클릭해주세요!",
            buttons: [
              {
                action: "webLink",
                label: "Link Button",
                webLinkUrl: 'https://sejong.korea.ac.kr' + $href,
              },
            ],
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

module.exports = apiRouter;
