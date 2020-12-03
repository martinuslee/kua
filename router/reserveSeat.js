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
                  "https://lh3.googleusercontent.com/proxy/IO0N4d6B0rjRKjBPCYBSTnI09BojxaXw9R8IXGyo6ClnG9Zs3NDUUmWvdjuSx1AbjxDc4NBiaTqqR4SHLFYIo0cZHjL2DMscj1KmO51DldPBVntokqieuq5Rk3uUPw4iMtSu_QkVQ7o-Km5quzGh4qEFMQoH_7nT_qSsmmWeUliKwMuOc8DIUJgQ15JW5JNoyvuvK5_-Ib1WH4ETtjjmL5qjDtbzHbiT4ihoUuiR1_ZheVphEpAnnh2w7WklCM8dISFZDYwuDXfQZevUGgulWNRzj_cXt5zUl4MOanfFzCOqIUR8TxzQytVqlOk2WoYCaaP6ocwfIAKEK6NivqgwuMuZtg0OVyKHZhddN0bTC1lkkphWIP_9eGlFUA7Y5w",
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