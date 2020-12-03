const express = require("express");
const apiRouter = express.Router();
//라우터를 통한 기능별 서버코드 구현
apiRouter.post("/announce", function (req, res) {
  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          listCard: {
            header: {
              title: "고려대학교 세종캠퍼스 학사 공지",
            },
            items: [
              {
                title: "학사일반공지",
                description: "학사일반공지 바로가기",
                imageUrl:
                  "http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg",
                link: {
                  web: "https://sejong.korea.ac.kr/campuslife/notice/college",
                },
              },
              {
                title: "장학공지",
                description: "교내, 교외 장학금 공지 바로가기",
                imageUrl:
                  "http://k.kakaocdn.net/dn/N4Epz/btqqHCfF5II/a3kMRckYml1NLPEo7nqTmK/1x1.jpg",
                link: {
                  web:
                    "http://sejong.korea.ac.kr/campuslife/notice/scholarship",
                },
              },
              {
                title: "학사일정",
                description: "학기 일정표 바로가기",
                imageUrl:
                  "http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg",
                link: {
                  web:
                    "https://sejong.korea.ac.kr/academics/administration/calendar/undergraduate",
                },
              },
            ],
            "buttons": [
              {
                "label": "학교 홈페이지 바로가기",
                "action": "webLink",
                "webLinkUrl": "https://sejong.korea.ac.kr"
              }
            ]
          },
        },
      ],
    },
  });
});

module.exports = apiRouter;
