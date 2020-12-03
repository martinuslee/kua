const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();//express framework로 서버구성
//라우터에 존재하는 기능들 불러오기
const userMenu = require('./router/menu');
const userDiagnosis = require('./router/diagnosis');
const userBook = require('./router/searchBook');
const userEat = require('./router/restaurant');
const userReserve = require('./router/reserveSeat');
const userLocation = require('./router/location');
const randomMenu = require('./router/randomMenu');
const announceList = require('./router/announce');


app.use(logger("dev", {}));
app.use(bodyParser.json());
//post로 요청된 json 타입 body를 쉽게 추출할 수 있는 모듈.
app.use(bodyParser.urlencoded({
  extended: true
}));
// extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 객체 안에 객체를 파싱할 수 있게하려면 true.



//각 기능을 미들웨어로 인테그레이션
app.use("/api", userMenu);
app.use("/api", userDiagnosis);
app.use("/api", userBook);
app.use("/api", userEat);
app.use("/api", userReserve);
app.use("/api", userLocation);
app.use("/api", randomMenu);
app.use("/api", announceList);

// 3000번 포트로 서버 실행
app.listen(3000, function () {
  console.log("Example skill server listening on port 3000!");
});

