var ssurl1 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/1/public/values?alt=json";
var ssurl2 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/2/public/values?alt=json";
var ssurl3 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/3/public/values?alt=json";
var ssurl4 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/4/public/values?alt=json";
var ssurl5 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/5/public/values?alt=json";
var ssurl6 = "https://spreadsheets.google.com/feeds/list/1orZMp2ipWJ_gxiiUpi-Ck7RUf_HZKaM1hyAIKICX2Vw/6/public/values?alt=json";

var ssurl1tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/1/public/values?alt=json";
var ssurl2tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/2/public/values?alt=json";
var ssurl3tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/3/public/values?alt=json";
var ssurl4tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/4/public/values?alt=json";
var ssurl5tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/5/public/values?alt=json";
var ssurl6tw = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/6/public/values?alt=json";

var mapsiteen =[];
var mapsitetw =[];

// ==============================
// HEADER
// ==============================

var headeren = $.ajax(
  { dataType: "json",
    url: ssurl1,
    async: true,
    success: function(urlmap) {
      let headermap = [];
      for (let i = 0; i < urlmap.feed.entry.length; i+=1) {
        let subdata=[ urlmap.feed.entry[i].gsx$次頁面一.$t,
                      urlmap.feed.entry[i].gsx$次頁面二.$t,
                      urlmap.feed.entry[i].gsx$次頁面三.$t,
                      urlmap.feed.entry[i].gsx$次頁面四.$t,
                      urlmap.feed.entry[i].gsx$次頁面五.$t,
                      urlmap.feed.entry[i].gsx$次頁面六.$t,
                      urlmap.feed.entry[i].gsx$次頁面七.$t,
                      urlmap.feed.entry[i].gsx$次頁面八.$t,
                      urlmap.feed.entry[i].gsx$次頁面九.$t,
                      urlmap.feed.entry[i].gsx$次頁面十.$t];
        //移除無內容資料
        var subdatafiltered = subdata.filter(function (el) {
          return el != "";
        });
        //console.log(subdatafiltered);
        let headerinfo = {  "main": urlmap.feed.entry[i].gsx$主頁面.$t,
                            "maintag": urlmap.feed.entry[i].gsx$主頁面網頁標籤.$t,
                            "sub": subdatafiltered
                          };

        headermap.push(headerinfo);
      }
      mapsiteen.header=headermap;
  }                     
});
var headertw = $.ajax(
  { dataType: "json",
    url: ssurl1tw,
    async: true,
    success: function(urlmap) {
      let headermap = [];
      for (let i = 0; i < urlmap.feed.entry.length; i+=1) {
        let subdata=[ urlmap.feed.entry[i].gsx$次頁面一.$t,
                      urlmap.feed.entry[i].gsx$次頁面二.$t,
                      urlmap.feed.entry[i].gsx$次頁面三.$t,
                      urlmap.feed.entry[i].gsx$次頁面四.$t,
                      urlmap.feed.entry[i].gsx$次頁面五.$t,
                      urlmap.feed.entry[i].gsx$次頁面六.$t,
                      urlmap.feed.entry[i].gsx$次頁面七.$t,
                      urlmap.feed.entry[i].gsx$次頁面八.$t,
                      urlmap.feed.entry[i].gsx$次頁面九.$t,
                      urlmap.feed.entry[i].gsx$次頁面十.$t];
        //移除無內容資料
        var subdatafiltered = subdata.filter(function (el) {
          return el != "";
        });
        //console.log(subdatafiltered);
        let headerinfo = {  "main": urlmap.feed.entry[i].gsx$主頁面.$t,
                            "maintag": urlmap.feed.entry[i].gsx$主頁面網頁標籤.$t,
                            "sub": subdatafiltered,
                          };

        headermap.push(headerinfo);
      }
      mapsitetw.header=headermap;
  }                     
});

// ==============================
// FOOTER
// ==============================
/*
var footeren = $.ajax(
  { dataType: "json",
    url: ssurl2,
    async: true,
    success: function(urlmap) {
        
  }                     
});
var footertw = $.ajax(
  { dataType: "json",
    url: ssurl2tw,
    async: true,
    success: function(urlmap) {
        mapsitetw.footer={  "lang": urlmap.feed.entry[0].gsx$語言.$t,
                          "fb": urlmap.feed.entry[0].gsx$fb.$t,
                          "vimo": urlmap.feed.entry[0].gsx$vimo.$t,
                          "app": urlmap.feed.entry[0].gsx$app.$t,
                          "addrass": urlmap.feed.entry[0].gsx$地址.$t,
                          "tel": urlmap.feed.entry[0].gsx$電話.$t,
                          };
  }                     
});
*/
// ==============================
// ABOUT / FOOTER
// ==============================

var aboutfn = function(ssurl,ty){
$.ajax(
  { dataType: "json",
    url: ssurl,
    async: true,
    success: function(urlmap) {
        let content =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$關於內文.$t;
            if (val===""){break;}
            else{
              content.push(val);
            }
        }
        let footercontent =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$底欄位關於內文.$t;
            if (val===""){break;}
            else{
              footercontent.push(val);
            }
        }
        let timeline =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$關於期程.$t;
            if (val===""){break;}
            else{
              timeline.push(val);
            }
        }
        let timelineevent =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$關於期程事件.$t;
            if (val===""){break;}
            else{
              timelineevent.push(val);
            }
        }
        let purchase =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$關於應用程式.$t;
            if (val===""){break;}
            else{
              purchase.push(val);
            }
        }
        let purchaseicon =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$關於應用程式分段.$t;
            if (val===""){break;}
            else{
              purchaseicon.push(val);

              //console.log(purchaseicon);
            }
        }
        let sliderslogon =[];
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = urlmap.feed.entry[i].gsx$投影片宣言.$t;
            if (val===""){break;}
            else{
              sliderslogon.push(val);
            }
        }
        if (ty==='EN'){
          
          mapsiteen.about={  "intro": 
                              { "titlestr":urlmap.feed.entry[0].gsx$關於主標.$t,
                                "titlesecstr":urlmap.feed.entry[0].gsx$關於分段.$t,
                                "workshopsecstr":urlmap.feed.entry[0].gsx$工作坊分段.$t,
                                "opentimestr":urlmap.feed.entry[0].gsx$開放時間.$t,
                                "teamsecstr":urlmap.feed.entry[0].gsx$團隊分段.$t,
                                "sliderslogonstr":sliderslogon,
                                "timestr":timeline,
                                "timeeventstr":timelineevent,
                                "aboutpurchasestr":purchase,
                                "aboutpurchaseicon":purchaseicon,
                                "contentstr":content
                              }
                          };
          mapsiteen.footer={  "lang": urlmap.feed.entry[0].gsx$語言.$t,
                              "fb": urlmap.feed.entry[0].gsx$fb.$t,
                              "vimo": urlmap.feed.entry[0].gsx$vimo.$t,
                              "app": urlmap.feed.entry[0].gsx$app.$t,
                              "addrass": urlmap.feed.entry[0].gsx$地址.$t,
                              "tel": urlmap.feed.entry[0].gsx$電話.$t,
                              "logoline": urlmap.feed.entry[0].gsx$圖示橫.$t,
                              "logostright": urlmap.feed.entry[0].gsx$圖示直.$t,
                              "contentstr":footercontent
                          };
        }else{
          mapsitetw.about={  "intro": 
                              { "titlestr":urlmap.feed.entry[0].gsx$關於主標.$t,
                                "titlesecstr":urlmap.feed.entry[0].gsx$關於分段.$t,
                                "workshopsecstr":urlmap.feed.entry[0].gsx$工作坊分段.$t,
                                "opentimestr":urlmap.feed.entry[0].gsx$開放時間.$t,                                
                                "teamsecstr":urlmap.feed.entry[0].gsx$團隊分段.$t,
                                "sliderslogonstr":sliderslogon,
                                "timestr":timeline,
                                "timeeventstr":timelineevent,
                                "aboutpurchasestr":purchase,
                                "aboutpurchaseicon":purchaseicon,
                                "contentstr":content
                              }
                          };
          mapsitetw.footer={  "lang": urlmap.feed.entry[0].gsx$語言.$t,
                              "fb": urlmap.feed.entry[0].gsx$fb.$t,
                              "vimo": urlmap.feed.entry[0].gsx$vimo.$t,
                              "app": urlmap.feed.entry[0].gsx$app.$t,
                              "addrass": urlmap.feed.entry[0].gsx$地址.$t,
                              "tel": urlmap.feed.entry[0].gsx$電話.$t,
                              "logoline": urlmap.feed.entry[0].gsx$圖示橫.$t,
                              "logostright": urlmap.feed.entry[0].gsx$圖示直.$t,
                              "contentstr":footercontent
                          };
        }
  }                     
});
}

// ==============================
// TEAM
// ==============================

var teamfn = function(ssurl,ty){
  $.ajax(
  { dataType: "json",
    url: ssurl,
    async: true,
    success: function(urlmap) {
        let content =[]
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = {
              "id":urlmap.feed.entry[i].gsx$id.$t,
              "name":urlmap.feed.entry[i].gsx$人員姓名.$t,
              "position":urlmap.feed.entry[i].gsx$人員職稱.$t,
              "pic":urlmap.feed.entry[i].gsx$人員照片.$t,
              "contentstr":urlmap.feed.entry[i].gsx$人員介紹.$t,
              "fb":urlmap.feed.entry[i].gsx$fb.$t,
              "twitter":urlmap.feed.entry[i].gsx$twitter.$t,
              "email":urlmap.feed.entry[i].gsx$email.$t
            };
            content.push(val);

        }
        if (ty==='EN'){mapsiteen.team=content;}
        else{mapsitetw.team=content;}
  }                     
});
}

// ==============================
// SERVICE
// ==============================

var servicefn = function(ssurl,ty){
  $.ajax(
  { dataType: "json",
    url: ssurl,
    async: true,
    success: function(urlmap) {
        let content =[]
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = {
              "id":urlmap.feed.entry[i].gsx$id.$t,
              "name":urlmap.feed.entry[i].gsx$服務名稱.$t,
              "pic":urlmap.feed.entry[i].gsx$服務照片.$t,
              "contentstr":urlmap.feed.entry[i].gsx$服務介紹.$t,
              "fb":urlmap.feed.entry[i].gsx$fb.$t,
              "twitter":urlmap.feed.entry[i].gsx$twitter.$t,
              "email":urlmap.feed.entry[i].gsx$email.$t
            };
            content.push(val);

        }
        if (ty==='EN'){mapsiteen.service=content;}
        else{mapsitetw.service=content;}
  }                     
});
}

// ==============================
// TUTORIAL
// ==============================

var tutorialfn = function(ssurl,ty){
$.ajax(
  { dataType: "json",
    url: ssurl,
    async: true,
    success: function(urlmap) {
        let content =[]
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = {
              "id":urlmap.feed.entry[i].gsx$id.$t,
              "titlestr":urlmap.feed.entry[i].gsx$教程主標.$t,
              "typestr":urlmap.feed.entry[i].gsx$教程類型.$t,
              "editor":urlmap.feed.entry[i].gsx$教程編輯.$t,
              "pic":urlmap.feed.entry[i].gsx$教程圖片.$t,
              "contentstr":urlmap.feed.entry[i].gsx$教程內文.$t,
              "posttime":urlmap.feed.entry[i].gsx$上傳時間.$t
            };
            content.push(val);

        }
        if (ty==='EN'){mapsiteen.tutorial=content;}
        else{mapsitetw.tutorial=content;}
  }                     
});
}
// ==============================
// WORKSHOP
// ==============================

var workshopfn = function(ssurl,ty){

  $.ajax(
  { dataType: "json",
    url: ssurl,
    async: true,
    success: function(urlmap) {
        let content =[]
        for(let i = 0;i<urlmap.feed.entry.length;i+=1){
            let val = {
              "id":urlmap.feed.entry[i].gsx$id.$t,
              "titlestr":urlmap.feed.entry[i].gsx$工作坊主標.$t,
              "typestr":urlmap.feed.entry[i].gsx$工作坊類型.$t,
              "lecturer":urlmap.feed.entry[i].gsx$工作坊老師.$t,
              "pic":urlmap.feed.entry[i].gsx$工作坊圖片.$t,
              "contentstr":urlmap.feed.entry[i].gsx$工作坊內文.$t,
              "workshoptime":urlmap.feed.entry[i].gsx$工作坊開始.$t,
              "workshopend":urlmap.feed.entry[i].gsx$工作坊結束.$t
            };
            content.push(val);

        }
        if (ty==='EN'){mapsiteen.workshop=content;}
        else{mapsitetw.workshop=content;}
  }                     
});
}

// ==============================
// PRELOAD
// ==============================

// windows preload
      $(window).load(function () {
        $(".loader").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        //sr.reveal('.sr-animated', { duration: 1000, viewOffset: { top: 100 }});
      });
// data switch
      $('[data-type="section-switch"]').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });

// data padding
      // Section Background Color
      $('[data-bg-color]').each(function() {

        var value = $(this).data('bg-color');

        $(this).css({
          backgroundColor: value,
        });
      });

      // Section Background Image
      $('[data-bg-image]').each(function() {

        var img = $(this).data('bg-image');

        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });


      // Elements Padding
      function elementPadding(attr) {

        $(attr).each(function() {

          if ( attr === '[data-padding]' ) {
            var data = {
              padding: $(this).data('padding')
            }
          } else if ( attr === '[data-padding-top]' ) {
            var data = {
              paddingTop: $(this).data('padding-top')
            }
          } else if ( attr === '[data-padding-right]' ) {
            var data = {
              paddingRight: $(this).data('padding-right')
            }
          } else if ( attr === '[data-padding-bottom]' ) {
            var data = {
              paddingBottom: $(this).data('padding-bottom')
            }
          } else if ( attr === '[data-padding-left]' ) {
            var data = {
              paddingLeft: $(this).data('padding-left')
            }
          }

          $(this).css(data);
        });
      }
      elementPadding('[data-padding]');
      elementPadding('[data-padding-top]');
      elementPadding('[data-padding-right]');
      elementPadding('[data-padding-bottom]');
      elementPadding('[data-padding-left]');

      // Elements margin
      function elementMargin(attr) {

        $(attr).each(function() {

          if ( attr === '[data-margin]' ) {
            var data = {
              margin: $(this).data('margin')
            }
          } else if ( attr === '[data-margin-top]' ) {
            var data = {
              marginTop: $(this).data('margin-top')
            }
          } else if ( attr === '[data-margin-right]' ) {
            var data = {
              marginRight: $(this).data('margin-right')
            }
          } else if ( attr === '[data-margin-bottom]' ) {
            var data = {
              marginBottom: $(this).data('margin-bottom')
            }
          } else if ( attr === '[data-margin-left]' ) {
            var data = {
              marginLeft: $(this).data('margin-left')
            }
          }

          $(this).css(data);
        });
      }
      elementMargin('[data-margin]');
      elementMargin('[data-margin-top]');
      elementMargin('[data-margin-right]');
      elementMargin('[data-margin-bottom]');
      elementMargin('[data-margin-left]');
// ==============================
// LOAD DATA
// ==============================
$.when( headeren , headertw, 
        aboutfn(ssurl2,'EN'),
        aboutfn(ssurl2tw,'中'),
        teamfn(ssurl5,'EN'),
        teamfn(ssurl5tw,'中'),
        tutorialfn(ssurl3,'EN'),
        tutorialfn(ssurl3tw,'中'),
        workshopfn(ssurl4,'EN'),
        workshopfn(ssurl4tw,'中'),
        servicefn(ssurl6,'EN'),
        servicefn(ssurl6tw,'中'),
      ).done(function() {
  $.getScript( "assets/js/header.js" ),
  $.getScript( "assets/js/banner.js" ),
  $.getScript( "assets/js/about.js" ),
  $.getScript( "assets/js/workshop.js" ),
  $.getScript( "assets/js/tutorial.js" ),
  $.getScript( "assets/js/footer.js" ),
  $.Deferred(function( deferred ){
        $( deferred.resolve );
    });
});