const express = require("express");
const apiRouter = express.Router();

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

  module.exports = apiRouter;