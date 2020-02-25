applyworkshop(mapsitetw);

// ==========================================
// BANNER SLIDER
// ==========================================



function applyworkshop(mapsite){

    var workshopstr=
        //<!-- Section Header -->
        '<div class="section-header">'+
          //'<h3>ABOUT<span>welcome To <span>IDEA FACTORY</span></span></h3>'+
          mapsite.about.intro.workshopsecstr+
          //<h3><b>GALLERY</b><span>Our Great <span>FLOWS</span></span></h3>
        '</div>';
        //<!-- Section Header /- -->
    workshopstr+=
      '<div class="gallery-category">'+
          '<ul id="filters">'+
            '<li><a id="first-click" data-filter=".'+mapsite.header[3].sub[0]+'" class="active" href="#" title="'+mapsite.header[3].sub[0]+'">'+mapsite.header[3].sub[0]+'</a></li>';

    for (let i=1;i<mapsite.header[3].sub.length;i+=1){
        workshopstr+='<li><a data-filter=".'+mapsite.header[3].sub[i]+'" href="#" title="'+mapsite.header[3].sub[i]+'">'+mapsite.header[3].sub[i]+'</a></li>';
    } 

    console.log(mapsite.header);
    workshopstr+=
          '</ul>'+
      '</div>';   

    workshopstr+=
          '<div class="gallery-list gallery-fitrow">';

for(let i=mapsite.workshop.length-1;i>0;i-=1){
    workshopstr+=
          '<div class="gallery-box col-md-3 col-sm-3 col-xs-3 no-padding '+mapsite.workshop[i].typestr+' others">'+
            '<img src="'+mapsite.workshop[i].pic+'" alt="Gallery" />'+
            '<div class="gallery-content">'+
              '<p style="color: white; margin-bottom:20px;">'+mapsite.workshop[i].typestr+'</p>'+
              '<h3 style="border-bottom:solid 2px; padding-bottom:10px;">'+mapsite.workshop[i].titlestr+'</h3>'+
              '<span>'+
                '<a href="#" title="Link"><i class="icon icon-Linked"></i></a>'+
                '<a class="zoom" href="'+mapsite.workshop[i].pic+'" title="zoom"><i class="icon icon-Search"></i></a>'+
              '</span>'+
            '</div>'+
          '</div>';
}    

    workshopstr+='</div>'; 

$('#workshop-section').html(workshopstr);


  /* - Gallery */
  function gallery() {
    if($(".gallery-fitrow").length){
      var $container = $(".gallery-fitrow");
      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: ".gallery-box",
        gutter: 0,
        transitionDuration: "0.5s"
      });
      
      $("#filters a").on("click",function(){
        $('#filters a').removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({ filter: selector });   
        return false;
      });
    }
  }
/* - Gallery Section */
    gallery();
    
    if($(".gallery-list").length){
      var url;
      $(".gallery-list .gallery-box").magnificPopup({
        delegate: "a.zoom",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",       
        }
      });
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

}