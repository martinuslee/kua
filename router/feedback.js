const express = require("express");
const apiRouter = express.Router();

apiRouter.post("/feedback", function (req, res) {
    console.log(req.body);
  
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "Kua를 평가해주세요!",
              description: "만족도와 건의사항, 오류 리포트",
              buttons: [
                {
                  action: "webLink",
                  label: "Link Button",
                  webLinkUrl:
                    "https://docs.google.com/forms/d/e/1FAIpQLScGGT38-mdkAMY-LdRg-a2nAVWkC_ml2DCBmrVNiTSImH5N8A/viewform",
                },
              ],
            },
          },
        ],
      },
    };
  
    res.status(200).send(responseBody);
  });

  module.exports = apiRouter;