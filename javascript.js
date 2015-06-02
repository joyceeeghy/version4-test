
	$(document).ready(function(){
		$("p#button1").click(function(){
			$("#logo1").toggle();
			$("#logo2").toggle();
		});
	});
	
	$(document).ready(function(){
		$("p#button2").click(function(){
			$("#button1").css("font-color", "green");
			$("#button2").css("font-color", "blue");
			$("#button3").css("font-color", "yellow");
		});
	});
	
	$(document).ready(function(){
		$("p#button3").click(function(){
			$("#mainnav").css("width", "800px"; "opacity",);
		});
	});
	
		$(document).ready(function(){
		$("p#button3").click(function(){
			$("#mainnav").animate({
				opacity: '0.75',
				width: '800px'
			});
		});
	});