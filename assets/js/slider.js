applyslider(mapsiteen);

// ==========================================
// SLIDER
// ==========================================
function applyslider(mapsite){

				//<!-- START REVOLUTION SLIDER 5.0 -->
				var sliderstr=
				'<div class="rev_slider_wrapper">'+
					'<div id="site-home-slider1" class="rev_slider" data-version="5.0">'+
						'<ul>'+
							'<li data-transition="zoomout" data-slotamount="default"  data-easein="easeInOut" data-easeout="easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7">'+
								//<!-- MAIN IMAGE -->
								'<img src="images/slide1.jpg" alt="slider" data-bgparallax="3" data-bgposition="center center" data-duration="30000" data-ease="Linear.easeNone" data-kenburns="on" data-no-retina="" data-offsetend="0 0" data-offsetstart="0 0" data-rotateend="0" data-rotatestart="0">'+
								
								//<!-- LAYER NR. 1 -->
								'<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 sub-title" id="slide-1-layer-1"'+ 
									'data-x="['\'left'\','\'left'\','\'center'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'0'\','\'0'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'245'\','\'245'\','\'145'\','\'55'\']" '+
									'data-fontsize="['\'48'\','\'48'\','\'48'\','\'24'\']"'+
									'data-fontweight="['\'600'\','\'600'\','\'600'\','\'600'\']"'+
									'data-lineheight="['\'56'\','\'56'\','\'56'\','\'26'\']"'+
									'data-width="['\'750'\','\'750'\','\'750'\','\'400'\']"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_in="x:[100%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" '+
									'data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" '+
									'data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" '+
									'data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" '+
									'data-start="1000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-responsive_offset="on"'+
									'data-elementdelay="0.05" '+
									'style="z-index: 2; word-wrap: break-word; max-width: 100%; color: #ffffff; padding: 0; letter-spacing: -0.96px; font-family: 'Poppins', sans-serif; text-transform: uppercase;">watch new <span style="color: #e2b13c;">all exhibitions</span> <br /> in <span style="color: #e2b13c;">max museum</span>'+
								'</div>'+
								
								//<!-- LAYER NR. 2 -->
								'<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 sub-title" id="slide-1-layer-2" '+
									'data-x="['\'left'\','\'left'\','\'center'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'0'\','\'0'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'370'\','\'370'\','\'270'\','\'120'\']" '+
									'data-fontsize="['\'18'\','\'18'\','\'18'\','\'18'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'24'\','\'24'\','\'24'\','\'24'\']"'+
									'data-width="['\'750'\','\'750'\','\'750'\','\'400'\']"'+
									'data-height="none"'+
									'data-whitespace="normal"'+
									'data-transform_idle="o:1;"'+
									'data-transform_in="x:[100%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" '+
									'data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" '+
									'data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" '+
									'data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" '+
									'data-start="1000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-responsive_offset="on"'+
									'data-elementdelay="0.05" '+
									'style="z-index: 2; white-space: normal; color:#ffffff; padding: 0; letter-spacing: 1.9px; font-family: '\'PT Serif'\', serif; font-style: italic;">'+
									'A man is born he'\'s a man of means. Then along come two they got nothin'\' but their <br /> jeans. But they got different strokes. It takes different strokes - it takes <br /> different strokes to move the world.'+
								'</div>'+

								//<!-- LAYER NR. 3 -->
								'<div class="tp-caption NotGeneric-Button rev-btn  rs-parallaxlevel-0" id="slide-1-layer-3" '+
									'data-x="['\'left'\','\'left'\','\'left'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'20'\','\'-100'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'475'\','\'475'\','\'375'\','\'260'\']" '+
									'data-fontsize="['\'16'\','\'16'\','\'16'\','\'16'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'20'\','\'20'\','\'20'\','\'20'\']"'+
									'data-width="none"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;"'+
									'data-style_hover="c:#fff;bg:#e2b13c;"'+
									'data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" '+
									'data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" '+
									'data-start="3000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-actions='\'[{"event":"click","action":"scrollbelow","offset":"0px"}]'\''+
									'data-responsive_offset="on" '+
									'data-responsive="off"'+
									'style="z-index: 9; font-family: '\'Poppins'\', sans-serif; border: 1px solid rgba(255,255,255,0.51); padding: 13px 53px; letter-spacing: 0.975px; white-space:nowrap; outline:none; box-shadow:none; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">Continue'+
								'</div>'+

								//<!-- LAYER NR. 4 -->
								'<div class="tp-caption WebProduct-Button rev-btn rs-parallaxlevel-0" id="slide-1-layer-4" '+
									'data-x="['\'left'\','\'left'\','\'left'\','\'center'\']" data-hoffset="['\'574'\','\'270'\','\'230'\','\'-110'\']" '+
									'data-y="['top','top','top','top']" data-voffset="['\'475'\','\'475'\','\'375'\','\'335'\']" '+
									'data-fontsize="['\'16'\','\'16'\','\'16'\','\'16'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'20'\','\'20'\','\'20'\','\'20'\']"'+
									'data-width="none"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;"'+
									'data-style_hover="c:rgba(210, 150, 6, 1.00);bg:rgba(255, 255, 255, 1.00);"'+
									'data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" '+
									'data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" '+
									'data-start="3000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-actions='\'[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'\''+
									'data-responsive_offset="on" '+
									'data-responsive="off"'+
									'style="z-index: 10; padding: 13px 53px; letter-spacing: 0.975px; font-family: '\'Poppins'\', sans-serif; background-color: #e2b13c; white-space: nowrap; outline:none; box-shadow:none; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">Explore'+
								'</div>'+
							'</li>'+
							
							'<li data-transition="zoomout" data-slotamount="default"  data-easein="easeInOut" data-easeout="easeInOut" data-masterspeed="2000" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7">'+
								//<!-- MAIN IMAGE -->
								'<img src="images/slide1.jpg" alt="slider" data-bgparallax="3" data-bgposition="center center" data-duration="30000" data-ease="Linear.easeNone" data-kenburns="on" data-no-retina="" data-offsetend="0 0" data-offsetstart="0 0" data-rotateend="0" data-rotatestart="0">'+
								
								//<!-- LAYER NR. 1 -->
								'<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 sub-title" id="slide-2-layer-1" '+
									'data-x="['\'left'\','\'left'\','\'center'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'0'\','\'0'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'245'\','\'245'\','\'145'\','\'55'\']" '+
									'data-fontsize="['\'48'\','\'48'\','\'48'\','\'24'\']"'+
									'data-fontweight="['\'600'\','\'600'\','\'600'\','\'600'\']"'+
									'data-lineheight="['\'56'\','\'56'\','\'56'\','\'26'\']"'+
									'data-width="['\'750'\','\'750'\','\'750'\','\'400'\']"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_in="x:[100%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" '+
									'data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" '+
									'data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" '+
									'data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" '+
									'data-start="1000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-responsive_offset="on"'+
									'data-elementdelay="0.05" '+
									'style="z-index: 2; word-wrap: break-word; max-width: 100%; color: #ffffff; padding: 0; letter-spacing: -0.96px; font-family: '\'Poppins'\', sans-serif; text-transform: uppercase;">watch new <span style="color: #e2b13c;">all exhibitions</span> <br /> in <span style="color: #e2b13c;">max museum</span>'+
								'</div>'+
								
								//<!-- LAYER NR. 2 -->
								'<div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0 sub-title" id="slide-2-layer-2" '+
									'data-x="['\'left'\','\'left'\','\'center'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'0'\','\'0'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'370'\','\'370'\','\'270'\','\'120'\']" '+
									'data-fontsize="['\'18'\','\'18'\','\'18'\','\'18'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'24'\','\'24'\','\'24'\','\'24'\']"'+
									'data-width="['\'750'\','\'750'\','\'750'\','\'400'\']"'+
									'data-height="none"'+
									'data-whitespace="normal"'+
									'data-transform_idle="o:1;"'+
									'data-transform_in="x:[100%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" '+
									'data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" '+
									'data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" '+
									'data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" '+
									'data-start="1000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-responsive_offset="on"'+
									'data-elementdelay="0.05" '+
									'style="z-index: 2; white-space: normal; color:#ffffff; padding: 0; letter-spacing: 1.9px; font-family: 'PT Serif', serif; font-style: italic;">'+
									'A man is born hes a man of means. Then along come two they got nothin but their <br /> jeans. But they got diff'rent strokes. It takes diff'rent strokes - it takes <br /> diffrent strokes to move the world.'+
								'</div>'+

								//<!-- LAYER NR. 3 -->
								'<div class="tp-caption NotGeneric-Button rev-btn  rs-parallaxlevel-0" id="slide-2-layer-3" '+
									'data-x="['\'left'\','\'left'\','\'left'\','\'center'\']" data-hoffset="['\'374'\','\'50'\','\'20'\','\'-100'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'475'\','\'475'\','\'375'\','\'260'\']" '+
									'data-fontsize="['\'16'\','\'16'\','\'16'\','\'16'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'20'\','\'20'\','\'20'\','\'20'\']"'+
									'data-width="none"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;"'+
									'data-style_hover="c:#fff;bg:#e2b13c;"'+
									'data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" '+
									'data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" '+
									'data-start="3000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-actions='\'[{"event":"click","action":"scrollbelow","offset":"0px"}]'\''+
									'data-responsive_offset="on" '+
									'data-responsive="off"'+
									'style="z-index: 9; font-family: '\'Poppins'\', sans-serif; border: 1px solid rgba(255,255,255,0.51); padding: 13px 53px; letter-spacing: 0.975px; white-space:nowrap; outline:none; box-shadow:none; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">Continue'+
								'</div>'+

								//<!-- LAYER NR. 4 -->
								'<div class="tp-caption WebProduct-Button rev-btn rs-parallaxlevel-0" id="slide-2-layer-4" '+
									'data-x="['\'left'\','\'left'\','\'left'\','\'center'\']" data-hoffset="['\'574'\','\'270'\','\'230'\','\'-110'\']" '+
									'data-y="['\'top'\','\'top'\','\'top'\','\'top'\']" data-voffset="['\'475'\','\'475'\','\'375'\','\'335'\']" '+
									'data-fontsize="['\'16'\','\'16'\','\'16'\','\'16'\']"'+
									'data-fontweight="['\'400'\','\'400'\','\'400'\','\'400'\']"'+
									'data-lineheight="['\'20'\','\'20'\','\'20'\','\'20'\']"'+
									'data-width="none"'+
									'data-height="none"'+
									'data-whitespace="nowrap"'+
									'data-transform_idle="o:1;"'+
									'data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;"'+
									'data-style_hover="c:rgba(210, 150, 6, 1.00);bg:rgba(255, 255, 255, 1.00);"'+
									'data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" '+
									'data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" '+
									'data-start="3000" '+
									'data-splitin="none" '+
									'data-splitout="none" '+
									'data-actions='\'[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'\''+
									'data-responsive_offset="on" '+
									'data-responsive="off"'+
									'style="z-index: 10; padding: 13px 53px; letter-spacing: 0.975px; font-family: '\'Poppins'\', sans-serif; background-color: #e2b13c; white-space: nowrap; outline:none; box-shadow:none; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">Explore'+
								'</div>'+
							'</li>'+
						'</ul> '+
					'</div>'+
				'</div>'+
				'<div class="goto-next"><a href="#history-section"><i class="icon icon-Mouse bounce"></i></a></div>';
$('#slider-section').html(sliderstr);
		/* - Revolution Slider */
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