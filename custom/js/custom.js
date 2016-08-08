		$(document).ready(function(){
			var $hh = $('.back');
			var $wHe = $(window).height();

			$hh.height($wHe); 
			$hh.addClass('full-screen');

			$(".a").mouseover(function(){
				$(".back").css("background", "url(images/a1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#3b6638");
				$(".hf h1").css("color", "#3b6638");
			});
			$(".a").mouseout(function(){
				$(".back").css("background", "url(images/jb3.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#fff");
				$(".hf h1").css("color", "#fff");
			});
			$(".b").mouseover(function(){
				$(".back").css("background", "url(images/b1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#3b6638");
				$(".hf h1").css("color", "#3b6638");
			});
			$(".b").mouseout(function(){
				$(".back").css("background", "url(images/jb3.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#fff");
				$(".hf h1").css("color", "#fff");
			});
			$(".c").mouseover(function(){
				$(".back").css("background", "url(images/c1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#3b6638");
				$(".hf h1").css("color", "#3b6638");
			});
			$(".c").mouseout(function(){
				$(".back").css("background", "url(images/jb3.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#fff");
				$(".hf h1").css("color", "#fff");
			});
			$(".d").mouseover(function(){
				$(".back").css("background", "url(images/d1.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#3b6638");
				$(".hf h1").css("color", "#3b6638");
			});
			$(".d").mouseout(function(){
				$(".back").css("background", "url(images/jb3.jpg) no-repeat center");
				$(".back").css("background-size", "100% 100%");
				$(".navbar-default .navbar-nav>li>a").css("color", "#fff");
				$(".hf h1").css("color", "#fff");
			});
			$(window).on('resize', function (){
				$wHe = $(window).height();
				$hh.height($wHe);
			});
		});