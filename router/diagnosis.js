const express = require("express");
const apiRouter = express.Router();
//라우터를 통한 기능별 서버코드 구현
apiRouter.post("/diagnosis", function (req, res) {
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "코로나-19 공지와 주변 선별진료소",
              description: "COVID-19 Announcement & triage room information",
              thumbnail: {
                imageUrl:
                  "https://pusyap.com/wp-content/uploads/2020/07/%EC%B2%B4%EC%98%A8%EC%B8%A1%EC%A0%95_%EC%BD%94%EB%A1%9C%EB%82%9819jpg.jpg",
              },
              buttons: [
                {
                  action: "webLink",
                  label: "교내 코로나 공지 (확진자 동선)",
                  webLinkUrl:
                    "https://sejong.korea.ac.kr/user/boardList.do?handle=102914&siteId=kr&id=kr_050108010000",
                    // 구글폼 웹링크 전달
                },
                {
                  action: "webLink",
                  label: "가까운 선별진료소 위치💉",
                  webLinkUrl:
                  "https://map.kakao.com/link/search/선별진료소",
                },
                {
                  action: "webLink",
                  label: "내 QR전자출입명부",
                  webLinkUrl:
                  "http://kko.to/KaequAjY0",
                  // 카카오 인증을 통한 전자출입명부 QR코드 반환
                },
              ],
            },
          },
        ],
      },
    });
  });

  module.exports = apiRouter;