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
                    "http://portal.korea.ac.kr/common/Download.kpd?filePath=/files/groupware/upload/202101/202101041028070725_%EA%B5%90%EC%A7%81%EC%9B%90%EC%8B%9D%EB%8B%B9%20%EC%A3%BC%EA%B0%84%20%EB%A9%94%EB%89%B4.pdf&fileName=%EA%B5%90%EC%A7%81%EC%9B%90%EC%8B%9D%EB%8B%B9%20%EC%A3%BC%EA%B0%84%20%EB%A9%94%EB%89%B4.pdf",
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