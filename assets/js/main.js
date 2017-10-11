$("document").ready(function(){



$(".chooseChakra").click(function(){
	$(".chooseChakra").animate({
		opacity: "0"})
		
	$(".firstChakras").animate({
		opacity: "1"})
})

$(".firstRoot").click(function(){
	$(".firstChakras").animate({opacity: "0"})
	$(".firstRoot").animate({opacity: "1"},{
		bottom: "200px"
	})
})






















})//document.ready