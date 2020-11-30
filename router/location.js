const { json } = require("body-parser");
const express = require("express");
const apiRouter = express.Router();

// var location = {
//     농심국제관:
//       "https://map.kakao.com/link/map/농심국제관,36.60918555652231,127.28552189796417",
//     학술정보원:
//       "https://map.kakao.com/link/map/학술정보원,36.61004854502758,127.28714058017081",
//   };

let nongshim = "농심국제관";
let library = "학술정보원";
let secondST = "제2과학기술대학";
let firstST = "제1과학기술대학";

let maplink;

//http://3.35.56.248:3000/api/location
apiRouter.post("/location", function (req, res) {
  const question = req.body.userRequest.utterance; // 입력 발화

  console.log(question);
  const Action = req.body.action;
  const where = Action.params.sys_building;
  // console.log(typeof(where));
  console.log(where);

  switch (where) {
    case nongshim:
      maplink =
        "https://map.kakao.com/link/map/농심국제관,36.60918555652231,127.28552189796417";
      mapName = nongshim;
      break;
    case library:
      maplink =
        "https://map.kakao.com/link/map/학술정보원,36.61004854502758,127.28714058017081";
      mapName = library;
      break;
    case secondST:
      maplink =
        "https://map.kakao.com/link/map/제2과학기술대학,36.60918555652231,127.28552189796417";
      mapName = secondST;
      break;
    case firstST:
      maplink =
        "https://map.kakao.com/link/map/제1과학기술대학,36.61004854502758,127.28714058017081";
      mapName = firstST;
      break;
    default:
      maplink = "https://map.kakao.com";
      mapName = "default";
      break;
  }

  //where json test
  //error occuered
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "카카오맵을 통해 " + mapName + "까지 길찾기를 도와드릴게요!",
            thumbnail: {
              imageUrl: "",
            },
            buttons: [
              {
                action: "webLink",
                label: "클릭해서 바로 길 찾기",
                webLinkUrl: maplink,
              },
            ],
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
