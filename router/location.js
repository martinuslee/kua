const { json } = require("body-parser");
const express = require("express");
const apiRouter = express.Router();

// let nongshim = "농심국제관";
// let library = "학술정보원";
// let secondST = "제2과학기술대학";
// let firstST = "제1과학기술대학";
// let cultureSport = "문화스포츠관";
// let policy = "공공정책대학";
// let pharm = "약학대학 연구실험동";
// let clutser = "산학협력관";
// let gate = "정문";
// let ict = "가속기ICT융합관";
// let square = "잔디광장";
// let donor = "기부자거리";
// let sukwon = "석원경상관";
// let rotc = "학군단";
// let ground = "종합운동장";
// let center = "중앙광장";
// let fitness = "휘트니스 센터";
// let hoyik = "호익플라자";
// let studentHall = "학생회관";
// let eastGate = "동문";
// let jinri = "진리관";
// let mirae ="미래관";
// let jeongui ="정의관";
// let jayou ="자유관";
// let gym = "체육관";
// let admin = "행정관";

let campLocation = [
  "농심국제관",
  "학술정보원",
  "제2과학기술대학",
  "제1과학기술대학",
  "문화스포츠관",
  "공공정책대학",
  "약학대학 연구실험동",
  "산학협력관",
  "정문",
  "가속기ICT융합관",
  "잔디광장",
  "기부자거리",
  "석원경상관",
  "학군단",
  "종합운동장",
  "중앙광장",
  "휘트니스 센터",
  "호익플라자",
  "학생회관",
  "동문",
  "진리관",
  "미래관",
  "정의관",
  "자유관",
  "체육관",
  "행정관",
];
//http://3.35.56.248:3000/api/location
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
                  "https://map.kakao.com/link/map/" + where + pinPoint(),
              },
            ],
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
