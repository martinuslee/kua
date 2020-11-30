const express = require("express");
const apiRouter = express.Router();


var location = {
    농심국제관:
      "https://map.kakao.com/link/map/농심국제관,36.60918555652231,127.28552189796417",
    학술정보원:
      "https://map.kakao.com/link/map/학술정보원,36.61004854502758,127.28714058017081",
  };
  //http://3.35.56.248:3000/api/location
  apiRouter.post("/location", function (req, res) {
    const userRequest = req.body.userRequest;
    const userLocation = userRequest.utterance; // 입력 발화
    const userAction = req.body.action;
    const locationStr = userAction.params;
    const locationObj = JSON.parse(locationStr).sys_building;
    console.log(locationObj);

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
  
  

  module.exports = apiRouter;