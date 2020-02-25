applyfooter(mapsitetw);

// ==========================================
// HEADER MENU
// ==========================================

function applyfooter(mapsite){

var footerstr =
        //<!-- Container -->

      '<div class="container">'+
        '<div class="row">'+
          '<div class="col-md-4 col-sm-6 col-xs-6 widget-block">'+
            //<!-- About Widget -->
            '<div class="ftr-widget ftr_widget_about">'+
              '<a href="#"><img src="images/basic/logo_invert.png" alt="Logo" /></a>';

              //'<p>Flying away on a wing and a prayer. Who the it be? Believe it or not its just me. A man is born he is a man of means. Then along come two they got nothing but their jeans. But we the got different strokes Believe it or not its just me.</p>'+
      
      

    footerstr += 
              '<p>'+mapsite.footer.contentstr[0]+'</p>'+   
              '<ul>'+
                '<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
                '<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>'+
                '<li><a href="#" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>'+
                '<li><a href="#" title="Tumblr"><i class="fa fa-tumblr"></i></a></li>'+
              '</ul>'+
            '</div>'+
            //<!-- About Widget /- -->
          '</div>'+
          
          '<div class="col-md-4 col-sm-6 col-xs-6 widget-block">'+
            //<!-- Recent Tweets -->
            '<div class="ftr-widget ftr_link">'+
              '<h3 class="widget-title" style="border-bottom:solid 2px;">'+(mapsite.footer.lang==='English' ? 'EXPLORE GUIDE' : '頁面導覽' )+'</h3>'+
              '<ul class="row">';
    
                for (let i=0;i<mapsite.header.length;i+=1){
                  footerstr+='<li class="col-md-6 col-sm-6 col-xs-6"><a href="'+mapsite.header[i].maintag+'" title="'+mapsite.header[i].main+'">'+mapsite.header[i].main+'</a></li>';
                } 
                //console.log(mapsite.header[0].main);
    //footerstr+=
    //            '<li class="col-md-6 col-sm-6 col-xs-6"><a href="index.html" title="Home">Home</a></li>'+
    //            '<li class="col-md-6 col-sm-6 col-xs-6"><a href="events.html" title="Events">Events</a></li>'+
    //            '<li class="col-md-6 col-sm-6 col-xs-6"><a href="aboutus.html" title="About Us">About Us</a></li>';
    var d = new Date();
    footerstr+=
              '</ul>'+
            '</div>'+
            //<!-- Recent Tweets /- -->
          '</div>'+
          
          '<div class="col-md-4 col-sm-6 col-xs-6 widget-block">'+
            //<!-- Recent Tweets -->
            '<div class="ftr-widget ftr_subscribe">'+
              '<h3 class="widget-title" style="border-bottom:solid 2px;">'+(mapsite.footer.lang==='English' ? 'SUBSCRIBE' : '訂閱' )+'</h3>'+
              '<form>'+
                '<div class="input-group">'+
                  '<input type="text" class="form-control" placeholder="'+(mapsite.footer.lang==='English' ? 'Enter Email Plaease' : '請輸入電子郵件信箱' )+'">'+
                  '<span class="input-group-btn">'+
                    '<button class="btn btn-default" type="button"><i class="fa fa-paper-plane-o"></i></button>'+
                  '</span>'+
                '</div>'+
                //<!-- /input-group -->
              '</form>'+
              '<p>'+(mapsite.footer.lang==='English' ? 'Get Latest Events and Exhibitions News.' : '取得中心最新工作坊與展覽資訊' )+'</p>'+
              '<div class="ftr-cnt-detail">'+
                '<p><i class="icon icon-Pointer"></i>'+(mapsite.footer.lang==='English' ? ' Yunlin, R.O.C, Taiwan, Idea Factory' : '台灣。雲林。自造者中心' )+'</p>'+
                '<p>'+
                  '<span><i class="icon icon-Phone2"></i> <a href="#" title="tel_footer">+886-5-534-2601 #6005</a></span>'+
                  '<span><i class="icon icon-Mail"></i> <a href="#" title="email_footer">i@idf.tw</a></span>'+
                '</p>'+
              '</div>'+
            '</div>'+
            //<!-- Recent Tweets /- -->
          '</div>'+
        '</div>'+
      '</div>'+
      //<!-- Container /- -->
      //<!-- Footer Bottom -->
      
      '<div class="container-fluid no-padding btm-ftr">'+
        '<p><i class="fa fa-copyright"></i> '+d.getFullYear()+(mapsite.footer.lang==='English' ? ' Idea Factory. All Rights Reserved.' : ' 自造者中心。圖片版權。' )+'</p>'+
      '</div>';

$('footer').html(footerstr);
      //<!-- Footer Bottom /- -->

// site and menu
$('#dt-site-footer').html(footerstr);
}
