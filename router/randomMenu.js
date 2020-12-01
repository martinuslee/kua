const express = require("express");
const apiRouter = express.Router();

apiRouter.post("/randomMenu", function (req, res) {
    var rand2 = Math.floor(Math.random() * 4)+1;
  
    switch (rand2) {
      case 0:
        var msg = "오늘은 집밥같은 한식이 어떨까요?";
        var image =
          "https://cdn.crowdpic.net/list-thumb/thumb_l_153BEE879D34315BF94C70E7ABEDBA50.jpg";
        var choice = "https://map.kakao.com/link/search/고려대세종주변한식";
        break;
      case 1:
        var msg = "오늘은 오랜만에 일식이 어떨까요?";
        var image =
          "https://cdn.crowdpic.net/list-thumb/thumb_l_5DD61F29C1FA75CE55668E071EF079E7.jpg";
        var choice = "https://map.kakao.com/link/search/고려대세종주변일식";
        break;
      case 2:
        var msg = "오늘은 느낌있게 양식이 어떨까요?";
        var image =
          "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-noodle-food-cartoon-illustration-image_1435987.jpg";
        var choice = "https://map.kakao.com/link/search/고려대세종주변양식";
        break;
      case 3:
        var msg = "짜증날땐 짜장면? 오늘은 중식이 어떨까요?";
        var image =
          "https://cdn.crowdpic.net/list-thumb/thumb_l_3D1036AEC54AF816BD6EF1221E127C92.jpg";
        var choice = "https://map.kakao.com/link/search/고려대세종주변중식";
        break;
    }
  
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: msg,
              thumbnail: {
                imageUrl: image,
              },
              buttons: [
                {
                  action: "webLink",
                  label: "클릭해서 바로 맛집 찾기",
                  webLinkUrl: choice,
                },
              ],
            },
          },
        ],
      },
    });
  });
  
  module.exports=apiRouter;