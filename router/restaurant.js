const express = require("express");
const apiRouter = express.Router();

apiRouter.post("/restaurant", function (req, res) {
  
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "학교 주변 맛집 정보를 보여드릴게요",
              thumbnail: {
                imageUrl:
                  "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/9Kii/image/X1zWJ7b_Qlk7H96UIlwq99FrKN8.png",
              },
              buttons: [
                {
                  action: "webLink",
                  label: "클릭해서 바로 맛집 찾기",
                  webLinkUrl:
                    "https://map.kakao.com/link/search/고려대세종주변맛집",
                    // kakao map api를 통한 키워드검색 기능으로 주변 맛집 반환
                },
              ],
            },
          },
        ],
      },
    });
  });

  module.exports = apiRouter;