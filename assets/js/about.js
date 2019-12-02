applyabout(mapsitetw);

// ==========================================
// BANNER SLIDER
// ==========================================

function applyabout(mapsite){

// ==========================================
// STRING ABOUT
// ==========================================
var aboutstr = 
        '<div class="section-header">'+
          mapsite.about.intro.titlesecstr+
        '</div>'+
        //<!-- Section Header /- -->
        '<div class="fluid-container">'+
            '<div class="col-md-6 no-padding img-block" data-image="images/history-img.jpg">'+
              '<img src="images/history-img.jpg" alt="History" />'+
            '</div>'+
            '<div class="col-md-6 history-details">'+
              '<div class="history-box">';

                  for(let i=0;i<mapsite.about.intro.contentstr.length;i+=1){
                    let val = mapsite.about.intro.contentstr[i];
                    aboutstr+='</br>'+val;
                  }

        aboutstr += '<ul>';

        for(let i=0;i<mapsite.about.intro.timestr.length;i+=1){

                    let val = mapsite.about.intro.timestr[i];
                    let valevent = mapsite.about.intro.timeeventstr[i];
                    aboutstr+='<li><h4>'+val+'</h4><p>'+valevent+'</p></li>';
                  }   
        aboutstr += 
                '</ul>'+
                //'<a href="#" title="Learn more our history">Learn more our history <i class="fa fa-angle-right"></i></a>'+
              '</div>'+
        '</div>'+
        '</div>';

$('#history-section').html(aboutstr);

    /* - History Section */
    if( $(".history-section").length ) {
      history_img();
    }

function history_img() {
    var width = $(window).width();
    var history_content_height = $(".history-section .history-details").height();
    if ( width >= 992 ) {
      $( ".history-section .img-block" ).removeAttr("style");
      $( ".history-section .img-block img" ).remove();
      var history_image = $(".history-section .img-block").attr("data-image");
      $( ".history-section .img-block" ).css({"background-image":"url('" + history_image + "')","height": history_content_height });
    } else {
      $( ".history-section .img-block" ).removeAttr("style");
      $( ".history-section .img-block img" ).remove();
      var history_image = $(".history-section .img-block").attr("data-image");
      $( ".history-section .img-block" ).append("<img src='"+ history_image +"' />")
    }
  }

// ==========================================
// APP
// ==========================================
    var appsignstr=
        '<div class="container">'+
          '<div class="purchase-content">';
    for(let i=0;i<mapsite.about.intro.aboutpurchasestr.length;i+=1){

                let val = mapsite.about.intro.aboutpurchasestr[i];
                appsignstr+='</br>'+val;
              }
    appsignstr+=       
            '<a href="'+mapsite.footer.app+'" title="Purchase Theme" class="purchase">'+mapsite.about.intro.aboutpurchaseicon[0]+'</a>'+
            '<a href="'+mapsite.footer.vimo+'" title="View Demos" class="purchase view">'+mapsite.about.intro.aboutpurchaseicon[1]+'</a>'+
          '</div>'+
        '</div>';
        //<!-- Container /- -->

$('#appsign-section').html(appsignstr);


var teamstr =
//<!-- Container -->
        '<div class="container">'+
          //<!-- Section Header -->
          '<div class="section-header">'+
            mapsite.about.intro.teamsecstr+
            //'<h3>TEAM<span>Visit our<span>TEAM</span></span></h3>'+
            //'<h3>On View<span>About Our <span>VENUS</span></span></h3>'+
          '</div>';


teamstr +=
          '<div class="row">';

          for(let i =0; i<mapsite.team.length;i+=1){
    teamstr +=
            '<div class="col-md-2 col-sm-6 col-xs-6 venu-box">'+
              '<div class="venu-image-block">'+
                '<img src="'+mapsite.team[i].pic+'" alt="venu" />'+
                '<div class="venu-content" >'+
                  '<h5>'+mapsite.team[i].position+'</h5>'+
                  '<h5>'+mapsite.team[i].name+'</h5>'+
                '</div>'+
              '</div>'+
            '</div>';
          }


teamstr +=
          '</div>'+
          //<!-- Section Header /- -->
        '</div>';
        //<!-- Container /- -->


$('#team-section').html(teamstr);

// ==========================================
// SERVICE
// ==========================================
var servicestr=
        '<div class="container">'+
          //<!-- Section Header -->
          '<div class="section-header">'+
            '<h3>'+(mapsite.footer.lang==='English' ? '<b>service</b><span>Our <span>service</span> connected</span>' : '<b>服務</b><span>我們<span>的</span>服務</span>' )+'</h3>'+
          '</div>';

          //<!-- Testimonial Carousel -->
    servicestr+=      
          '<div class="testimonial-carousel">';
   
    for(let i = 0; i<mapsite.service.length;i+=1){
          servicestr+= 
            '<div class="col-md-12 col-sm-12 col-xs-12 no-padding testi-block">'+           
              '<div class="col-md-6 col-sm-6 col-xs-6 no-padding testi-img-block">'+
                '<img src="'+mapsite.service[i].pic+'" alt="Testimonial" />'+
              '</div>'+
              '<div class="col-md-6 col-sm-6 col-xs-6 testi-content">'+
                '<h4>'+mapsite.service[i].name+'</h4>'+
                '<p>'+mapsite.service[i].contentstr+'</p>'+
              '</div>'+
            '</div>';
    }

    servicestr+= 
          '</div>'+
          //<!-- Testimonial Carousel /- -->
        '</div>';
        //<!-- Container /- --> 
//console.log(mapsite.service);
$('#service-section').html(servicestr);

// ==========================================
// SERVICE
// ==========================================
/* - Testimonial Carousel */
    if( $(".testimonial-carousel").length ) {
      $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        responsive:{
          0:{
            items: 1
          },
          992:{
            items: 2
          }
        }
      });
    }

// ==========================================
// EVENT
// ==========================================
var eventstr=

        '<div class="container">'+
          //<!-- Section Header -->
          '<div class="section-header">'+
            '<h3>'+(mapsite.footer.lang==='English' ? '<b>Events</b><span>Recently <span>Events</span></span>' : '<b>活動</b><span>近期<span>活動</span></span>' )+'</h3>'+
          '</div>'+
          //<!-- Section Header /- -->
          //<!-- Row -->
          '<div class="row">';
 

var dd = new Date();
var dp = (dd.getFullYear()-2015)*12+(dd.getMonth()+1);
// 參數值為 (年分-2015*12)+月份
// 至前3個月後 皆可計入 近期 即 wdp-dp 需  大於等於 -3

for(let i = 0; i<mapsite.workshop.length;i+=1){
  let wdv = mapsite.workshop[i].workshoptime.split('.');
  let wdp = (parseInt(wdv[0])-2015)*12+parseInt(wdv[1]);
  
  if (wdp-dp >= -3){
   
    eventstr+= 
            '<div class="col-md-11 col-sm-6 col-xs-6">'+
              //<!-- Events Block -->
              '<div class="events-block">'+
                '<div class="event-content">'+
                  '<div class="col-md-5 col-sm-12 col-xs-12 no-padding img-block">'+
                    '<a href="#"><img src="images/event-sec1.jpg" alt="Event" /></a>';
           if  ((wdp-dp == 0) && (dd.getDate()-parseInt(wdv[2]) >= 0) || (wdp-dp > 0)) {
              eventstr+= '<h6><i class="icon icon-Settings"></i>Upcoming</h6>';
           }    
                    
    eventstr+= 
                  '</div>'+
                  '<div class="col-md-7 col-sm-12 col-xs-12 events-content"  style="padding-bottom: 25px;">'+
                    '<div class="post-meta">'+
                      '<div class="post-add"><i class="icon icon-Pointer"></i>'+mapsite.workshop[i].typestr+'</div>'+
                      '<div class="post-date"><i class="icon icon-Time"></i> '+mapsite.workshop[i].workshoptime+'</div>'+
                    '</div>'+
                    '<h3>'+mapsite.workshop[i].titlestr+'</h3>'+
                    '<p>'+mapsite.workshop[i].contentstr+'</p>'+
                    '<div class="btn-block">'+
                      '<a href="#" title="See more details">'+(mapsite.footer.lang==='English' ? 'view more' : '更多資訊' )+'<i class="fa fa-angle-right"></i></a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              //<!-- Events Block /- -->
            '</div>';
            
          }
}            
            
       eventstr+=      
          '</div>'+
          //<!-- Row /- -->
        '</div>';
        //<!-- Container /- -->
$('#event-section').html(eventstr);

  /* - Events List */
  function event_list() {
    $(".event-section2 .events-content .events-list .events-list-box").each(function(index){
      $(".event-section2 .events-content .events-list .events-list-box > div").removeAttr("style");
      var event_height = $(".event-section2 .events-content .events-list .events-list-box").eq(index).height();
      if( event_height > 80 ) {
        $(".event-section2 .events-content .events-list .events-list-box > div").css("height",event_height);
      } else {
        $(".event-section2 .events-content .events-list .events-list-box > div").css("min-height","80px");
      }
    });
  }

  function event_img_block() {
    var width = $(window).width();
    var event_height = $(".event-section2").height();
    if ( width >= 992 ) {
      $(".event-section2 .event-img-block").removeAttr("style");
      $( ".event-section2 .event-img-block > img" ).remove();
      var event_image = $(".event-section2 .event-img-block").attr("data-image");
      $( ".event-section2 .event-img-block" ).css({"background-image":"url('" + event_image + "')","height": event_height });
    } else {
      $(".event-section2 .event-img-block").removeAttr("style");
      $( ".event-section2 .event-img-block > img" ).remove();
      var event_image = $(".event-section2 .event-img-block").attr("data-image");
      $( ".event-section2 .event-img-block" ).prepend("<img src='"+ event_image +"' />")
    }
    if ( width >= 992 ) {
      var event_img_block_height = $(".event-section2 .event-img-block").height();
      var event_img_content_height = $(".event-section2 .event-img-block .event-img-content-box").height();
      var event_img_content_padding = ( event_img_block_height - event_img_content_height ) / 2 ;
      $(".event-section2 .event-img-block").css({"padding-top":event_img_content_padding,"padding-bottom":event_img_content_padding});
    } else {
      $(".event-section2 .event-img-block").removeAttr("style");
    }
  }

// ==========================================
// TUTORIAL
// ==========================================
var mar = ['Jan','Feb','Mar','Apr','May','Jul','Jun','Agu','Sep','Oct','Nov','Dec'];
var tutorialstr=
        //<!-- Container -->
        '<div class="container">'+
          //<!-- Section Header -->
          '<div class="section-header">'+
            '<h3>'+(mapsite.footer.lang==='English' ? '<b>TUTORIAL</b><span>Latest <span>TUTORIAL</span></span>' : '<b>教學分享</b><span>近期<span>教學分享</span></span>' )+'</h3>'+
          '</div>'+
          //<!-- Section Header /- -->
          //<!-- Row -->
          '<div class="row">';
  for(let i=0;i<3;i+=1){
      let tdv = mapsite.tutorial[i].posttime.split('.');      
      let tdmar = mar[parseInt(tdv[1])];
      //console.log(tdmar);

      tutorialstr +=

            //<!-- Type Post -->
            '<div class="col-md-4 col-sm-6 col-xs-6 latest-blog">'+
            
              '<article class="type-post">'+
              
                '<div class="entry-cover">'+
                  '<a href="#"><img src="images/latest-blog1.jpg" alt="Blog" /></a>'+
                '</div>'+
                '<div class="entry-header">'+
                  '<div class="title-block">'+
                    '<h3><a href="#" title="Enjoying the Classical Art">'+mapsite.tutorial[i].titlestr+'</span></a></h3>'+
                    '<div class="author">'+
                      '<span>by <a href="#" title="admin">'+mapsite.tutorial[i].editor+'</a></span>'+
                      '<div class="category">'+
                        '<a href="#" title="featured">'+mapsite.tutorial[i].typestr+'</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<span class="post-date"><a href="#">'+parseInt(tdv[2])+' <span>'+ tdmar+'</span></a></span>'+
                '</div>'+
                '<div class="entry-content">'+
                  '<p>'+mapsite.tutorial[i].contentstr+'</p>'+
                  '<a href="#" class="btn" title="View More">'+(mapsite.footer.lang==='English' ? 'view more' : '更多資訊' )+'<i class="fa fa-angle-right"></i></a>'+
                  '<div class="entry-meta">'+
                    '<span class="entry-comments"><i class="fa fa-comment-o"></i><a href="#">3 Comments</a></span>'+
                    '<span class="entry-likes"><i class="fa fa-heart-o"></i><a href="#">15 Likes</a></span>'+
                  '</div>'+
                '</div>'+
                
              '</article>'+
            '</div>';
              //<!-- Type Post /- -->
  }        
      tutorialstr += 
          '</div>'+
          //<!-- Row /- -->
        '</div>';
        //<!-- Container /- -->
$('#tutorial-section').html(tutorialstr);

/* - Blog */    
    $('#calendar').datepicker({
      inline: true,
      firstDay: 1,
      showOtherMonths: true,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    });




}