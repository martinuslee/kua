const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const apiRouter = express.Router();

app.use(logger("dev", {}));
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.listen(3000, function () {
  console.log("Example skill server listening on port 3000!");
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

apiRouter.post("/diagnosis", function (req, res) {
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "코로나-19 자가진단",
            description: "COVID-19 Self-diagnosis",
            thumbnail: {
              imageUrl:
                "https://pusyap.com/wp-content/uploads/2020/07/%EC%B2%B4%EC%98%A8%EC%B8%A1%EC%A0%95_%EC%BD%94%EB%A1%9C%EB%82%9819jpg.jpg",
            },
            buttons: [
              {
                action: "webLink",
                label: "구글 링크(Link)",
                webLinkUrl:
                  "https://docs.google.com/forms/d/e/1FAIpQLSf0oC7eK8KmBLXJfITgk7ZJN-aB2jUcN6aBUcaLNhgpJQGYlw/viewform",
              },
              {
                action: "phone",
                label: "선별진료소 전화",
                phoneNumber: "044-860-1038",
              },
            ],
            simpleText: {
              text: "구글 링크 폼을 캡처후 채팅방에 사진을 올릴 수 있어요!",
            },
          },
        },
      ],
    },
  });
});

apiRouter.post("/searchBook", function (req, res) {
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "학술정보원 도서검색",
            description: "팝업창에서 도서를 검색해주세요",
            thumbnail: {
              imageUrl:
                "https://lh3.googleusercontent.com/proxy/IO0N4d6B0rjRKjBPCYBSTnI09BojxaXw9R8IXGyo6ClnG9Zs3NDUUmWvdjuSx1AbjxDc4NBiaTqqR4SHLFYIo0cZHjL2DMscj1KmO51DldPBVntokqieuq5Rk3uUPw4iMtSu_QkVQ7o-Km5quzGh4qEFMQoH_7nT_qSsmmWeUliKwMuOc8DIUJgQ15JW5JNoyvuvK5_-Ib1WH4ETtjjmL5qjDtbzHbiT4ihoUuiR1_ZheVphEpAnnh2w7WklCM8dISFZDYwuDXfQZevUGgulWNRzj_cXt5zUl4MOanfFzCOqIUR8TxzQytVqlOk2WoYCaaP6ocwfIAKEK6NivqgwuMuZtg0OVyKHZhddN0bTC1lkkphWIP_9eGlFUA7Y5w",
            },
            buttons: [
              {
                action: "webLink",
                label: "Link Button",
                webLinkUrl: "https://libs.korea.ac.kr/",
              },
            ],
          },
        },
      ],
    },
  });
});

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
              },
            ],
          },
        },
      ],
    },
  });
});

var location = {
  농심국제관:
    "https://map.kakao.com/link/map/농심국제관,36.60918555652231,127.28552189796417",
  학술정보원:
    "https://map.kakao.com/link/map/학술정보원,36.61004854502758,127.28714058017081",
};

apiRouter.post("/location", function (req, res) {
  const userRequest = req.body.userRequest;
  const userLocation = userRequest.utterance; // 입력 발화

  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "카카오맵을 통해 길찾기를 도와드릴게요!",
            thumbnail: {
              imageUrl: "",
            },
            buttons: [
              {
                action: "webLink",
                label: "클릭해서 바로 길 찾기",
                webLinkUrl: "https://map.kakao.com/link/map/농심국제관,36.60918555652231,127.28552189796417",
              },
            ],
          },
        },
      ],
    },
  });
});

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
              },
            ],
          },
        },
      ],
    },
  });
});

apiRouter.post("/randomMenu", function (req, res) {
  var rand2 = Math.floor(Math.random() * 4);

  switch (rand2) {
    case 0:
      var msg = "오늘은 집밥같은 한식이 어떨까요?";
      var image =
        "https://cdn.crowdpic.net/list-thumb/thumb_l_153BEE879D34315BF94C70E7ABEDBA50.jpg";
      var choice = "https://map.kakao.com/link/search/고려대세종주변한식";
      break;
    case 1:
      var msg = "오늘은 오랜만에 일식이 어떨까요?";
      var image =
        "https://cdn.crowdpic.net/list-thumb/thumb_l_5DD61F29C1FA75CE55668E071EF079E7.jpg";
      var choice = "https://map.kakao.com/link/search/고려대세종주변일식";
      break;
    case 2:
      var msg = "오늘은 느낌있게 양식이 어떨까요?";
      var image =
        "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-noodle-food-cartoon-illustration-image_1435987.jpg";
      var choice = "https://map.kakao.com/link/search/고려대세종주변양식";
      break;
    case 3:
      var msg = "짜증날땐 짜장면? 오늘은 중식이 어떨까요?";
      var image =
        "https://cdn.crowdpic.net/list-thumb/thumb_l_3D1036AEC54AF816BD6EF1221E127C92.jpg";
      var choice = "https://map.kakao.com/link/search/고려대세종주변중식";
      break;
  }

  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: msg,
            thumbnail: {
              imageUrl: image,
            },
            buttons: [
              {
                action: "webLink",
                label: "클릭해서 바로 맛집 찾기",
                webLinkUrl: choice,
              },
            ],
          },
        },
      ],
    },
  });
});
