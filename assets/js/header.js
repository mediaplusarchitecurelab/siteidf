applyheader(mapsiteen);

// ==========================================
// HEADER MENU
// ==========================================

function applyheader(mapsite){
//<!-- nav -->
var navstr =
          '<nav class="navbar navbar-default ow-navigation">'+
            '<div id="loginpanel" class="desktop-hide">'+
              '<div class="right" id="toggle">'+
                '<a id="slideit" href="#slidepanel"><i class="fo-icons fa fa-inbox"></i></a>'+
                '<a id="closeit" href="#slidepanel"><i class="fo-icons fa fa-close"></i></a>'+
              '</div>'+
            '</div>'+

            '<div class="navbar-header">'+
              '<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">'+
                '<span class="sr-only">Toggle navigation</span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
              '<a href="index.html" class="navbar-brand"><i>IdeaFactory</i></a>'+
            '</div>'+
//<!-- Menu Icon -->
//<!-- Menu Icon /- -->

            '<div class="navbar-collapse collapse" id="navbar">'+
              '<ul class="nav navbar-nav">';

// ABOUT, TUTORIAL, WORKSHOP, PROFOLIO, SERVICE 

for (let j=1;j<=5;j+=1){
navstr +=       '<li class="active dropdown">'+
                  '<a href="'+mapsite.header[j].maintag+'" title="'+mapsite.header[j].main+'" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">'+mapsite.header[j].main+'</a>'+
                  '<i class="ddl-switch fa fa-angle-down"></i>';
                /*
                  '<ul class="dropdown-menu">';
                
                for (let i=0;i<mapsite.header[j].sub.length;i+=1){
                  navstr+='<li><a href="'+mapsite.header[j].maintag+'" title="'+mapsite.header[j].sub[i]+'">'+mapsite.header[j].sub[i]+'</a></li>';
                } 

                '</ul>'+
*/
navstr+=
               '</li>';
}
          

navstr+=        '<li><a href="contactus.html" title="Contact">'+(mapsite.footer.lang==='English' ? 'Contact Us' : '聯絡我們' )+'</a></li>'+
              '</ul>'+
            '</div>'+
//<!--/.nav-collapse -->
          '</nav>';
//<!-- nav /- -->
$('#site-header').html(navstr);



var sliderpanelstr=
        '<div class="container-fluid no-padding top-header">'+
          //<!-- Container -->
          '<div class="container">'+
            '<div class="row">'+
              '<div class="col-md-6 col-sm-6 hour-block">'+
                mapsite.about.intro.opentimestr+
              '</div>'+

              '<div class="col-md-6 col-sm-6 social-block">'+
                    '<ul>'+
                      '<li><a href="'+mapsite.footer.fb+'" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
                      '<li><a href="'+mapsite.footer.vimo+'" title="Facebook"><i class="fa fa-vimeo"></i></a></li>'+
                      '<li><span style="color: white"> | </span></li>'+
                      '<li><a href="#" id="lang" title="lang"><i class="fa fa-globe"></i></a><span style="color: white">&nbsp;'+mapsite.footer.lang+'&nbsp;</span></li>'+
                    '</ul>'+              
              '</div>'+

            '</div>'+
          '</div>'+
          //<!-- Container /- -->
        '</div>'+
        //<!-- Top Header /- -->
        
        //<!-- Logo Block -->
        '<div class="container">'+
          '<div class="col-md-12 col-sm-12 col-xs-12 no-padding logo-block">'+
            '<div class="col-md-4 h-logo">'+
              '<a href="index.html" title="Logo"><img src="images/basic/logo.png" alt="Logo" /></a>'+
            '</div>'+
            '<div class="col-md-8 col-sm-12 col-xs-12 cnt-content">'+
              '<div class="cnt-detail">'+
                '<i class="icon icon-Pointer">'+
                  
                '</i>'+
                '<p><a href="'+mapsite.footer.addrass+'" title="'+mapsite.footer.addrass+'">'+mapsite.footer.addrass+'</a></p>'+
              '</div>'+
              '<div class="cnt-detail">'+
                '<i class="icon icon-Phone">'+

                '</i>'+
                '<p><a href="#" title="'+mapsite.footer.tel+'">'+mapsite.footer.tel+'</a></p>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
        //<!-- Logo Block /- -->
$('#site-slidepanel').html(sliderpanelstr);



var sliderstr=
        '<div class="rev_slider_wrapper">'+
          '<div id="home-slider1" class="rev_slider" data-version="5.0">'+
            '<ul>'+
              '<li data-transition="zoomout" data-slotamount="default"  data-easein="easeInOut" data-easeout="easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7">'+
                //<!-- MAIN IMAGE -->
                
                '<img src="images/slide1.jpg" alt="slider" data-bgparallax="3" data-bgposition="center center" data-duration="30000" data-ease="Linear.easeNone" data-kenburns="on" data-no-retina="" data-offsetend="0 0" data-offsetstart="0 0" data-rotateend="0" data-rotatestart="0">'+

                '<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 sub-title" id="slide-1-layer-1" '+ 
                  'data-x="[\'left\',\'left\',\'center\',\'center\']" data-hoffset="[\'374\',\'50\',\'0\',\'0\']" '+  
                  'data-y="[\'top\',\'top\',\'top\',\'top\']" data-voffset="[\'245\',\'245\',\'145\',\'55\']" '+ 
                  'data-fontsize="[\'48\',\'48\',\'48\',\'24\']" '+ 
                  'data-fontweight="[\'600\',\'600\',\'600\',\'600\']" '+ 
                  'data-lineheight="[\'56\',\'56\',\'56\',\'26\']" '+ 
                  'data-width="[\'750\',\'750\',\'750\',\'400\']" '+ 
                  'data-height="none" '+ 
                  'data-whitespace="nowrap" '+ 
                  'data-transform_idle="o:1;" '+ 
                  'data-transform_in="x:[100%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" '+ 
                  'data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" '+ 
                  'data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" '+ 
                  'data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" '+ 
                  'data-start="1000" '+ 
                  'data-splitin="none" '+ 
                  'data-splitout="none" '+ 
                  'data-responsive_offset="on" '+ 
                  'data-elementdelay="0.05" '+ 
                  'style="z-index: 2; word-wrap: break-word; max-width: 100%; color: #ffffff; padding: 0; letter-spacing: -0.96px; font-family: \'Poppins\', sans-serif; text-transform: uppercase;">'+
                '</div>'+
              '</li>'+
            '</ul>'+
          '</div>'+
        '</div>';
              
$('#slider-section').html(sliderstr);
//console.log(mapsite.about.intro.sliderslogonstr);  
// site and menu
//$('#dt-site-menu').html(navstr);
// lang Trigger
      var $lang = '#lang'; 
      $($lang).on('click',function() {
        console.log(mapsite.footer.lang);
        var $this = $(this);

        if (mapsite.footer.lang==='English'){ // 中
          applyheader(mapsitetw);
          applyabout(mapsitetw);
          applytutorial(mapsitetw);
          applyworkshop(mapsitetw);
          applyfooter(mapsitetw);
        }else{ // EN
          applyheader(mapsiteen);
          applyabout(mapsiteen);
          applytutorial(mapsiteen);
          applyworkshop(mapsiteen);
          applyfooter(mapsiteen);
        }    
      });


if($(".slider-section").length){
      $("#home-slider1").revolution({
        sliderType:"standard",
        delay:6000,
        responsiveLevels:[1920,1025,768,480],
        gridwidth:[1920,1025,768,480],
        gridheight:[788,788,570,400],
        navigation: {
          arrows:{
            enable:true,
            style:"uranus"
          }
        },
      });
      $("#home-slider2").revolution({
        sliderType:"standard",
        delay:6000,
        responsiveLevels:[1920,1025,768,480],
        gridwidth:[1920,1025,768,480],
        gridheight:[919,788,570,480],
        navigation: {
          arrows:{
            enable:true,
            style:"uranus"
          }
        },
      });
    }
          
}