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
const announce = require('./router/announce');


app.use(logger("dev", {}));
app.use(bodyParser.json());

//각 기능을 미들웨어로 인테그레이션
app.use("/api", userMenu);
app.use("/api", userDiagnosis);
app.use("/api", userBook);
app.use("/api", userEat);
app.use("/api", userReserve);
app.use("/api", userLocation);
app.use("/api", randomMenu);
app.use("/api", announce);

// 3000번 포트로 서버 실행
app.listen(3000, function () {
  console.log("Example skill server listening on port 3000!");
});

