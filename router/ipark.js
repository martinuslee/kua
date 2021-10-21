const express = require("express");
const apiRouter = express.Router();

const axios = require("axios"); //html로 웹자료를 get

apiRouter.post("/ipark", function (req, res) {
  const liveData = "http://cxz3619.pythonanywhere.com/liveData";
  let members = "";
  axios.get(liveData).then((response) => {
    // console.log(response);
    const {data} = response;
    members = data.length;
    console.log(members);
  });
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          //  어디인지 모르겠다는 메세지를 반환
          simpleText: {
            text: "현재 아이파크에는 "+ members +"명의 회원분들이 운동을 하고 있습니다.",
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
