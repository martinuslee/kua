const express = require("express");
const apiRouter = express.Router();
const axios = require("axios"); //html로 웹자료를 get
const cheerio = require("cheerio"); //html을 JS로 변환

let $href = [];

apiRouter.post("/menu", function (req, res) {
  //console.log(req.body);

  axios
    .get(`https://sejong.korea.ac.kr/campuslife/facilities/dining/weeklymenu`)
    .then((response) => {
      const $ = cheerio.load(response.data);

      links = $("a"); //<a> 태그 전부 가져옴
      $(links).each((i, link) => {
        //console.log(i + ' : ' + $(link).text() +': '+$(link).attr('href')+ '\n');
        if ($(link).text() === "교직원식당 주간 메뉴"){ //a 태그에 텍스트가 교직원식당 주간 메뉴인 부분 찾기
          $href=($(link).attr("href")); // 찾았으면 href 속성 링크 가져옴
        } else if($(link).text() == "학생식당 주간 메뉴"){
          $href_studnet=($(link).attr("href")); // 찾았으면 href 속성 링크 가져옴
        }
      });
      console.log($href + '\n' + $href_student);
    });

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "금주의 교직원 식당 식단표입니다",
            description: "아래 버튼을 클릭해서 확인해주세요!",
            thumbnail: {
              imageUrl:
                "https://clipartstation.com/wp-content/uploads/2017/11/cafeteria-clipart-1.jpg",
            },
            buttons: [
              {
                action: "webLink",
                label: "교직원 식당",
                webLinkUrl: $href,
              },
              {
                action: "webLink",
                label: "진리관 학생식당",
                webLinkUrl: $href,
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
