const { json } = require("body-parser");
const express = require("express");
const apiRouter = express.Router();

apiRouter.post("/location", function (req, res) {
  const question = req.body.userRequest.utterance; // 입력 발화

  console.log(question);
  let Action = req.body.action;
  let where = Action.params.sys_building;
  // console.log(typeof(where));
  console.log(Action.params);
  console.log(where);

  let gps = {
    농심국제관: "36.60918555652231,127.28552189796417",
    학술정보원: "36.61004854502758,127.28714058017081",
    제2과학기술대학: "36.61104430370841, 127.28688799534845",
    제1과학기술대학: "36.60999264660403, 127.2845548753664",
    문화스포츠관: "36.61123638564794, 127.29073465209953",
    공공정책대학: "36.61103445686396, 127.28690752487559",
    "약학대학 연구실험동": "36.6094981593413, 127.28345650645907",
    산학협력관: "36.609097689308975, 127.28434163543477",
    행정관: "36.61120336, 127.288913",
    체육관: "36.61110748, 127.2912823",
    자유관: "36.61217758,	127.2847584",
    정의관: "36.61177109,	127.2851649",
    동문: "36.61027821,	127.2932073",
    학생회관: "36.61048992, 127.2895474",
    호익플라자: "36.6115898,	127.2874836",
    진리관: "36.61120034,	127.284548",
    휘트니스센터: "36.61063263,	127.2845459",
    중앙광장: "36.6091478,	127.2855744",
    학군단: "36.61238929,	127.2885261",
    종합운동장: "36.60973684,	127.2822959",
    미래관: "36.61082357,	127.2857203",
    석원경상관: "36.61138154,	127.2897575",
    가속기ICT융합관: "36.60887878,	127.2831311",
    잔디광장: "36.610064,	127.288674",
    정문: "36.60860329,	127.2890318",
    기부자거리: "36.60886881,	127.2891613",
  };

  //gps좌표를 구하는 함수
  let pinPoint = () => {
    let gpsPoint;
    for (var key in gps) {
      if (key == where) {
        gpsPoint = gps[key];
        return gpsPoint;
      }
    }
  };

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
                webLinkUrl:
                  "https://map.kakao.com/link/map/" + where + "," + pinPoint(),
              },
            ],
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
