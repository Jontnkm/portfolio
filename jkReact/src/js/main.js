
//main img moving function
// $(function() {
// 	var win_w = $(window).width();
// 	$(window).resize(function(){
// 		location.href="";
// 	});
// 	if(win_w > 1921){
// 		balloonUp();
// 		function balloonUp() {
// 			$('.mv_bg').stop().animate({
// 				'top': 630
// 			}, 1100, null, balloonDown);
// 		}

// 		function balloonDown() {
// 			$('.mv_bg').stop().animate({
// 				'top': 650
// 			}, 1100, null, balloonUp);
// 		}	
// 	} else if (win_w < 1921 && win_w > 1200) {
// 		balloonUp();
// 		function balloonUp() {
// 			$('.mv_bg').stop().animate({
// 				'top': 470
// 			}, 1100, null, balloonDown);
// 		}

// 		function balloonDown() {
// 			$('.mv_bg').stop().animate({
// 				'top': 490
// 			}, 1100, null, balloonUp);
// 		}
// 	} else {
// 		balloonUp();
// 		function balloonUp() {
// 			$('.mv_bg').stop().animate({
// 				'top': 0
// 			}, 1100, null, balloonDown);
// 		}

// 		function balloonDown() {
// 			$('.mv_bg').stop().animate({
// 				'top': 10
// 			}, 1100, null, balloonUp);
// 		}

// 		/*$(".web_menu ul li a").click(function(){
// 			$(this).css("color","#1b6adf");
//     		$(this).next("span").addClass("over");

//     		if($(this).parent("li").hasClass("about")){
// 	        	window.setTimeout(function(){
// 			        location.href="";
// 			    }, 900);
// 	        }else if($(this).parent("li").hasClass("works")){
// 	        	window.setTimeout(function(){
// 			        location.href="";
// 			    }, 900);
// 	        }else if($(this).parent("li").hasClass("contact")){
// 	        	window.setTimeout(function(){
// 			        location.href="";
// 			    }, 900);
// 	        }
// 	    });*/
// 	}

// 	//메인 메뉴 에니메이션 부여하기 (시간차)
	
// 	window.setTimeout(function(){
// 		$(".web_menu ul li:first-of-type").addClass("fadeInLeft");
// 	}, 500);
// 	window.setTimeout(function(){
// 		$(".web_menu ul li:nth-of-type(2)").addClass("fadeInLeft");
// 	}, 700);
// 	window.setTimeout(function(){
// 		$(".web_menu ul li:nth-of-type(3)").addClass("fadeInLeft");
// 	}, 900);
//     /*window.setTimeout(function(){
//         $(".web_menu ul li").removeClass("wow");
//     }, 550);*/

//     $(".web_menu ul li").mouseenter(function(){
//     	$(this).find("a").css("color","#1b6adf");
//     	$(this).find("span").addClass("over");
//     }).mouseleave(function(){
//     	$(this).find("a").css("color","#fff");
//     	$(this).find("span").removeClass("over");
//     })

//     //content_page top, left, right ration calculation
//     //default_positioning
//     var win_h = $(window).height();

//     //curtain_call
//     $(".curtain01").css("top",win_h);
//     $(".curtain02").css("left",win_w);
//     $(".curtain03").css("right",win_w);
//     $(".curtain04").css("bottom",win_h);

//     $("#about_box").css("top",win_h);
//     $("#about_box").css("left",win_w);
//     $("#contact_box").css("right",win_w);
//     $("#contact_box").css("top",win_h);

//     $(".web_menu ul li a").click(function(){
//     	var idx = $(this).parent("li").index();

//     	switch(idx){
//     		case 0 :
//     		window.setTimeout(function(){
//     			$("#about_box").css("top","-30px");
//                 $("#about_box").css("left","-30px");
//     			$("#about_box").css("opacity","1");
//     			window.setTimeout(function(){
//     				$("#about_box").css("top","0");
//                     $("#about_box").css("left","0");
//     			}, 550);
//     		}, 500);
//     		break;
//     		case 1 : break;
//     		case 2 :

//     		window.setTimeout(function(){
//     			$("#contact_box").css("right","-30px");
//                 $("#contact_box").css("top","-30px");
//     			$("#contact_box").css("opacity","1");
//     			window.setTimeout(function(){
//     				$("#contact_box").css("right","0");
//                     $("#contact_box").css("top","0");
//     			}, 550);
//     		}, 500);
//     		break;
//     	}
//     });

//     $(".cont_box > #exit_area").mouseenter(function(){
//     	console.log("test");
//     	$(this).css('cursor','url(img/close_btn.png),auto');
//     	$(this).click(function(){
//     		var cont_box = $(this).parent("div");
//     		if($(cont_box).hasClass("about_box")){
//     			$("#about_box").css("top",win_h);
//                 $("#about_box").css("left",win_w);
//     			$("#about_box").css("opacity","0");
//     		}else if($(cont_box).hasClass("work_box")){
//     			$("#work_box").css("left",win_w);
//     			$("#work_box").css("opacity","0");
//     		}else if($(cont_box).hasClass("contact_box")){
//     			$("#contact_box").css("right",win_w);
//                 $("#contact_box").css("top",win_h);
//     			$("#contact_box").css("opacity","0");
//     		};
//     	});
//     });
// });
