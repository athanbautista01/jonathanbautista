		$(document).ready(function(){
			var $hh = $('.back');
			var $wHe = $(window).height();

			$hh.height($wHe); 
			$hh.addClass('full-screen');

			$(".a").mouseover(function(){
				$(".back").css("background", "url(images/a1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");

			});
			$(".a").mouseout(function(){
				$(".back").css("background", "url(images/jb1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".b").mouseover(function(){
				$(".back").css("background", "url(images/b1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".b").mouseout(function(){
				$(".back").css("background", "url(images/jb1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".c").mouseover(function(){
				$(".back").css("background", "url(images/c1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".c").mouseout(function(){
				$(".back").css("background", "url(images/jb1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".d").mouseover(function(){
				$(".back").css("background", "url(images/d1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(".d").mouseout(function(){
				$(".back").css("background", "url(images/jb1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
			});
			$(window).on('resize', function (){
				$wHe = $(window).height();
				$hh.height($wHe);
			});
		});