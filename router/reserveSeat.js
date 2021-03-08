const express = require("express");

const apiRouter = express.Router();

apiRouter.post("/reserveSeat", function (req, res) {
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "학술정보원 열람실 예약",
              description: "팝업창 로그인후 사용해주세요!",
              thumbnail: {
                imageUrl:
                "https://www.inews365.com/data/photos/20190940/art_1569820010941.jpg",
              },
              buttons: [
                {
                  action: "webLink",
                  label: "Link Button",
                  webLinkUrl: "http://libs.korea.ac.kr:81/", 
                  //도서관 열람실 링크 81번포트로 지정되어 있어 이 링크를 반환
                },
              ],
            },
          },
        ],
      },
    });
  });

  module.exports = apiRouter;