const express = require("express");
const apiRouter = express.Router();
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

//평일 시간표
// 역 뒤 (학교행)
const toCampus = [
  "08:30:00",
  "08:40:00",
  "08:50:00",
  "09:00:00",
  "09:20:00",
  "09:40:00",
  "09:50:00",
  "10:00:00",
  "10:20:00",
  "10:40:00",
  "10:50:00",
  "11:10:00",
  "11:30:00",
  "11:50:00",
  "12:20:00",
  "12:40:00",
  "12:50:00",
  "13:20:00",
  "13:40:00",
  "14:00:00",
  "14:20:00",
  "14:40:00",
  "15:10:00",
  "15:40:00",
  "16:00:00",
  "16:20:00",
  "16:40:00",
  "17:00:00",
  "17:20:00",
  "17:40:00",
  "17:50:00",
  "18:10:00",
  "18:40:00",
  "19:10:00",
  "19:40:00",
  "20:10:00",
  "20:40:00",
  "21:00:00",
  "21:30:00",
  "21:50:00",
];
// 학교(역전 행)
const toStation = [
  "08:50:00",
  "09:10:00",
  "09:30:00",
  "09:40:00",
  "11:00:00",
  "11:20:00",
  "11:40:00",
  "12:10:00",
  "12:30:00",
  "12:40:00",
  "13:10:00",
  "13:30:00",
  "13:50:00",
  "14:10:00",
  "14:30:00",
  "15:00:00",
  "15:30:00",
  "15:50:00",
  "16:10:00",
  "16:30:00",
  "16:50:00",
  "17:10:00",
  "17:30:00",
  "17:40:00",
  "17:40:00",
  "18:00:00",
  "18:30:00",
  "19:00:00",
  "19:30:00",
  "20:00:00",
  "20:30:00",
  "20:50:00",
  "21:20:00",
  "21:40:00"
];
// 일요일 시간표
// 학교 (역전행)
const sunToStation = [
  "17:00:00",
  "17:30:00",
  "18:20:00",
  "19:00:00",
  "19:30:00",
  "20:10:00",
  "21:00:00",
];
// 역뒤(학교행)
const sunToCampus = [
  "16:40:00",
  "17:10:00",
  "17:40:00",
  "18:30:00",
  "19:10:00",
  "19:40:00",
  "20:20:00",
  "21:10:00",
];
// 겨울 계절 방학 중 시간표 
const winterToCam = [
  "08:30:00",
  "08:50:00",
  "09:05:00",
  "12:20:00",
  "12:50:00",
  "15:20:00",
  "16:20:00",
  "17:20:00",
];
const winterToStation = [
  "12:10:00",
  "12:40:00",
  "15:10:00",
  "16:10:00",
  "17:10:00",
];
const SunwinterToCam = [
  "16:40:00",
  "17:10:00",
  "17:30:00",
  "17:50:00",
  "18:10:00",
  "18:50:00",
  "19:30:00",
  "20:00:00",
  "20:25:00",
  "20:40:00",
  "21:10:00",
  "21:30:00",
];
const SunwinterToStation = [
  "17:00:00",
  "17:20:00",
  "17:40:00",
  "18:00:00",
  "18:40:00",
  "19:20:00",
  "19:50:00",
  "20:15:00",
  "20:30:00",
  "21:00:00",
  "21:20:00",
];

apiRouter.post("/bus", function (req, res) {
  let todayLabel = moment().day();
  //0: 일, 1: 월, 2: 화. 3: 수, 4: 목, 5: 금, 6: 토

  // 현재 시간을 가져온다.
  // 가져온 시간보다 큰 시간을 찾는다.
  // 큰시간 - 현재 시간을 하면 남은 시간을 구할 수 있다.
  //   ex) 현재시간 18:52:00, 현재시간 다음 시간 = 19:10:00 , 차이는 diff로 구할수 있다.

  const rightNow = moment().format("HH:mm:ss"); //현재시간 가져오기 Ok

  console.log("현재 시간: " + rightNow);
  console.log(todayLabel);
  // 배열을 돌면서 시간 구하기
  const isBetween = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (rightNow > arr[arr.length - 1]) {
        var find = arr[0];
        break;
      } else if (arr[i] > rightNow) {
        var find = arr[i];
        break;
      }
    }
    return find;
  };

  const time = [""];
  const time2 = [""];
/**
 * 
 * @param {*} depart 출발시간
 * @param {*} now 현재시간
 * @param {*} arr 시간표 배열
 * @returns 
 */
  const getTime = (depart, now, arr) => {
    let ms = moment(depart, "HH:mm:ss").diff(moment(now, "HH:mm:ss"));
    let d = moment.duration(ms).asMinutes();
    let min = Math.floor(d);
    let sec = ((d - min) * 60).toFixed(0);
    arr[0] = min; //분
    arr[1] = sec; //초
    return arr;
  };
  let resultCampus = "default";
  let resultStation = "default";

  if (todayLabel > 0 && todayLabel < 6) {
    resultCampus = isBetween(toCampus);
    resultStation = isBetween(toStation);
  } else if (todayLabel === 0) {
    resultCampus = isBetween(sunToCampus);
    resultStation = isBetween(sunToStation);
  }

  getTime(resultCampus, rightNow, time); //학교행 역전에서 타는 버스
  getTime(resultStation, rightNow, time2); // 역전행 학교에서 타는 버스

  let msg1 =
    "🏫 학교행 : " +
    Math.abs(time[0]) +
    "분 " +
    time[1] +
    " 초 후 출발" +
    "\n" +
    "🚉 조치원역행 : " +
    Math.abs(time2[0]) +
    "분 " +
    time2[1] +
    " 초 후 출발" +
    "\n" +
    "🏫 To the Campus : " +
    resultCampus +
    "\n" +
    "🚉 To the Station : " +
    resultStation;

  function isOver(arr) {
    if (todayLabel != 5) {
      if (rightNow > arr[arr.length - 1]) {
        msg1 = "금일 운행이 모두 종료 되었습니다.";
      } else msg1;
    } else {
      if (rightNow > "19:10:00") {
        msg1 = "금일 운행이 모두 종료 되었습니다.";
      } else msg1;
    }
  }
  switch (todayLabel) {
    case 0:
      isOver(sunToCampus);
      isOver(sunToStation);
      isOver(toCampus);
      isOver(toStation);
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      isOver(toCampus);
      isOver(toStation);
      break;
      //isOver(winterToCam);isOver(winterToStation);
      //msg1 = '금일은 운행하지 않습니다.'
      //break;
    case 6:
      msg1 = "금일은 운행하지 않습니다.";
      break;
    default:
      break;
  }

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "학생 셔틀 버스 운행 시간표" + "\n" + msg1,
          },
        },
        {
          simpleImage: {
            imageUrl:
              "https://github.com/martinuslee/kua/blob/master/src/img/bus_schedule.jpeg?raw=true",
            altText: "셔틀시간표",
          },
        },
      ],
    },
  };
  res.status(200).send(responseBody);
});

module.exports = apiRouter;
