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
let cultureSport = "문화스포츠관";
let policy = "공공정책대학";
let pharm = "약학대학 연구실험동";
let clutser = "산학협력관";
let maplink;

//http://3.35.56.248:3000/api/location
apiRouter.post("/location", function (req, res) {
  const question = req.body.userRequest.utterance; // 입력 발화

  console.log(question);
  let Action = req.body.action;
  let where = Action.params.sys_building;
  // console.log(typeof(where));
  console.log(Action.params);
  console.log(where);

  switch (where) {
    case nongshim:
      maplink = "/농심국제관,36.60918555652231,127.28552189796417";
      break;
    case library:
      maplink = "/학술정보원,36.61004854502758,127.28714058017081";
      break;
    case secondST:
      maplink = "/제2과학기술대학,36.61104430370841, 127.28688799534845";
      break;
    case firstST:
      maplink = "/제1과학기술대학,36.60999264660403, 127.2845548753664";
      break;
    case cultureSport:
      maplink = "/문화스포츠관,36.61123638564794, 127.29073465209953";
      break;
    case policy:
      maplink = "/공공정책대학,36.61103445686396, 127.28690752487559";
      break;
    case pharm:
      maplink = "/약학대학 연구실험동,36.6094981593413, 127.28345650645907";
      break;
    case clutser:
      maplink = "/산학협력관,36.609097689308975, 127.28434163543477";
      break;
    default:
      maplink = "/";
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
            title: "카카오맵을 통해 " + where + "까지 길찾기를 도와드릴게요!",
            thumbnail: {
              imageUrl: "",
            },
            buttons: [
              {
                action: "webLink",
                label: "클릭해서 바로 길 찾기",
                webLinkUrl: "https://map.kakao.com/link/map/" + maplink,
              },
            ],
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
