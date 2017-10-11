$("document").ready(function(){



$(".chooseChakra").click(function(){
	$(".chooseChakra").animate({
		opacity: "0"})
		
	$(".firstChakras").animate({opacity: "1"})
})

$(".firstRoot").click(function(){
	$(".firstChakras").animate({opacity: "0"})
	$(".rootImage").animate({opacity: "1"})
	$(".rootImage").css("animation", "rotate 999s");
})





















})//document.ready