const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const userMenu = require('./router/menu');
const userDiagnosis = require('./router/diagnosis');
const userBook = require('./router/searchBook');
const userEat = require('./router/restaurant');
const userReserve = require('./router/reserveSeat');
const userLocation = require('./router/location');
const randomMenu = require('./router/randomMenu');


app.use(logger("dev", {}));
app.use(bodyParser.json());
app.use("/api", userMenu);
app.use("/api", userDiagnosis);
app.use("/api", userBook);
app.use("/api", userEat);
app.use("/api", userReserve);
app.use("/api", userLocation);
app.use("/api", randomMenu);


app.listen(3000, function () {
  console.log("Example skill server listening on port 3000!");
});

