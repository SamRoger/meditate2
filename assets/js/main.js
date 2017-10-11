$("document").ready(function(){



var crownHeader = document.getElementsByClassName("crownHeader")[0];
var thirdHeader = document.getElementsByClassName("thirdHeader")[0];
var throatHeader = document.getElementsByClassName("throatHeader")[0];
var heartHeader = document.getElementsByClassName("heartHeader")[0];
var solarPlexusHeader = document.getElementsByClassName("solarPlexusHeader")[0];
var sacralHeader = document.getElementsByClassName("sacralHeader")[0];
var rootHeader = document.getElementsByClassName("rootHeader")[0];
//---------------------------------------------------------------------//
var guide = document.getElementsByClassName("guide")[0];
var chooseChakra = document.getElementsByClassName("chooseChakra")[0];
//---------------------------------------------------------------------//
var headers = document.getElementsByClassName("headers");
//---------------------------------------------------------------------//
var crownHertz = document.getElementsByClassName("crownHertz");
//---------------------------------------------------------------------//
chooseChakra.addEventListener("click", function(){
	guide.classList.add("guideAnimation") //slides left
	chooseChakra.classList.add("chooseChakraAnimation") //moves up
	for (var i = 0; i < headers.length; i++) {
		headers[i].classList.add("headersFadein") //brings in all headers w/ fade
	}
})
//---------------------------------------------------------------------//
crownHeader.addEventListener("click", function(){
			crownHeader.classList.add("crownSlide")

		thirdHeader.classList.add("headersFadeout") //fades out every header
		throatHeader.classList.add("headersFadeout") //fades out every header
		heartHeader.classList.add("headersFadeout") //fades out every header
		solarPlexusHeader.classList.add("headersFadeout") //fades out every header
		sacralHeader.classList.add("headersFadeout") //fades out every header
		rootHeader.classList.add("headersFadeout") //fades out every header

	// crownHertz.classList.add("crownHertzFadein")


	// crownHeader.style.animation = "crownMove 2s forwards"
})
//---------------------------------------------------------------------//


}) //document .ready
