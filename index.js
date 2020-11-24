const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const apiRouter = express.Router();

app.use(logger("dev", {}));
app.use(bodyParser.json());
app.use("/api", apiRouter);

apiRouter.post("/sayHello", function (req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

apiRouter.post("/showHello", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl:
              "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

apiRouter.post("/menu", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl:
              "https://sejong.korea.ac.kr/dext5editordata/20201116_112917917_91726.jpg",
            altText: "hello I'm Ryan",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});



apiRouter.post("/test", function(req, res) {
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "간단한 텍스트와 버튼요소",
              description: "간단한 버튼과 텍스트입니다",
              buttons: [
                {
                  action: "message",
                  label: "열어보기"
                }
              ]
            }
          }
        ]
      }
    });
  });

  app.post("/blockId", function(req, res) {
    const userRequest = req.body.userRequest;
    const blockId = userRequest.block.id;
  
    return res.send({:
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "블록ID 입니다",
              description: blockId
            }
          }
        ]
      }
    });
  });

  app.listen(3000, function() {
    console.log('Example skill server listening on port 3000!');
  });
