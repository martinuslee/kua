const express = require("express");
const apiRouter = express.Router();

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
                  webLinkUrl:
                    "https://sejong.korea.ac.kr/campuslife/facilities/dining/weeklymenu",
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