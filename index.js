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

//
apiRouter.post("/sayHello", function (req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
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
		webLinkUrl: "https://sejong.korea.ac.kr/campuslife/facilities/dining/weeklymenu"
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
            buttons: [
              {
                action: "webLink",
                label: "Link Button",
		webLinkUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf0oC7eK8KmBLXJfITgk7ZJN-aB2jUcN6aBUcaLNhgpJQGYlw/viewform"
              },
            ],
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
            buttons: [
              {
                action: "webLink",
                label: "Link Button",
		webLinkUrl: "https://libs.korea.ac.kr/"
              },
            ],
          },
        },
      ],
    },
  });
});

app.post("/blockId", function (req, res) {
  const userRequest = req.body.userRequest;
  const blockId = userRequest.block.id;

  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "블록ID 입니다",
            description: blockId,
          },
        },
      ],
    },
  });
});
