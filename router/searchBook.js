const express = require("express");
const apiRouter = express.Router();

apiRouter.post("/searchBook", function (req, res) {
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "학술정보원",
            description: "아래 버튼을 통해 도서검색, 이용안내 바로가기",
            thumbnail: {
              imageUrl:
                "https://www.inews365.com/data/photos/20190940/art_1569820010941.jpg",
            },
            buttons: [
              {
                action: "webLink",
                label: "Link Button",
                webLinkUrl: "https://libs.korea.ac.kr/", //도서관 웹페이지 링크 반환
              },
            ],
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
