$("document").ready(function(){
//---------------------------------------------------------------
function min5Countdown(){
		var m = 5;
		var s = 0;
		var min5StopInverval = setInterval(function(){
		if(m === 5 && s === 0){
		 	m = 4
		 	s = 60
		} else if(m === 4 && s === 0){
			m = 3
			s = 60
		} else if(m === 3 && s === 0){
			m = 2
			s = 60
		} else if(m === 2 && s === 0){
			m = 1
			s = 60
		} else if(m === 1 && s === 0){
			m = 0
			s = 60
		} else if(m === 0 && s === 1) {
			stopInterval();
		}
		s = s -= 1	
//--------------------------------------------
		setTimeout(function(){
			o.disconnect(ctx.destination);
		},300000)

		if (s < 10) {
        	$(".timerDisplay").html(m + ':0' + s);
    	}
    	else {
        	$(".timerDisplay").html(m + ':' + s);
    	}	
	},1000)
}
//---------------------------------------------------------------//
function min15Countdown(){
	var m = 15;
			var s = 0;
		var min15StopInverval = setInterval(function(){
		if(m === 15 && s === 0){
		 	m = 14
		 	s = 60
		}else if(m === 14 && s === 0){
			m = 13
			s = 60
		}else if(m === 13 && s === 0){
			m = 12
			s = 60
		}else if(m === 12 && s === 0){
			m = 11
			s = 60
		}else if(m === 11 && s === 0){
			m = 10
			s = 60
		}else if(m === 10 && s === 0){
			m = 9
			s = 60
		}else if(m === 9 && s === 0){
			m = 8
			s = 60
		}else if(m === 8 && s === 0){
			m = 7
			s = 60
		}else if(m === 7 && s === 0){
			m = 6
			s = 60
		}else if(m === 6 && s === 0){
			m = 5
			s = 60
		}else if(m === 5 && s === 0){
			m = 4
			s = 60
		}else if(m === 4 && s === 0){
			m = 3
			s = 60
		}else if(m === 3 && s === 0){
			m = 2
			s = 60
		}else if(m === 2 && s === 0){
			m = 1
			s = 60
		}
		else if(m === 1 && s === 0){
			m = 0
			s = 60
		} else if(m === 0 && s === 1) {
			stopInterval();
		}
		s = s -= 1	
//--------------------------------------------
		setTimeout(function(){
			o.disconnect(ctx.destination);
		},899000)

		if (s < 10) {
        	$(".timerDisplay").html(m + ':0' + s);
    	}
    	else {
        	$(".timerDisplay").html(m + ':' + s);
    	}	
	},1000)
}
//---------------------------------------------------------------//
function min30Countdown(){
		var m = 30;
			var s = 0;
		var min30StopInverval = setInterval(function(){
		if(m === 30 && s === 0){
		 	m = 29
		 	s = 60
		}else if(m === 29 && s === 0){
			m = 28
			s = 60
		}else if(m === 28 && s === 0){
			m = 27
			s = 60
		}else if(m === 27 && s === 0){
			m = 26
			s = 60
		}else if(m === 26 && s === 0){
			m = 25
			s = 60
		}else if(m === 25 && s === 0){
			m = 24
			s = 60
		}else if(m === 24 && s === 0){
			m = 23
			s = 60
		}else if(m === 23 && s === 0){
			m = 22
			s = 60
		}else if(m === 22 && s === 0){
			m = 21
			s = 60
		}else if(m === 21 && s === 0){
			m = 20
			s = 60
		}else if(m === 20 && s === 0){
			m = 19
			s = 60
		}else if(m === 19 && s === 0){
			m = 18
			s = 60
		}else if(m === 18 && s === 0){
			m = 17
			s = 60
		}else if(m === 17 && s === 0){
			m = 16
			s = 60
		}else if(m === 16 && s === 0){
			m = 15
			s = 60
		}else if(m === 15 && s === 0){
			m = 14
			s = 60
		}else if(m === 14 && s === 0){
			m = 13
			s = 60
		}else if(m === 13 && s === 0){
			m = 12
			s = 60
		}else if(m === 12 && s === 0){
			m = 11
			s = 60
		}else if(m === 11 && s === 0){
			m = 10
			s = 60
		}else if(m === 10 && s === 0){
			m = 9
			s = 60
		}else if(m === 9 && s === 0){
			m = 8
			s = 60
		}else if(m === 8 && s === 0){
			m = 7
			s = 60
		}else if(m === 7 && s === 0){
			m = 6
			s = 60
		}else if(m === 6 && s === 0){
			m = 5
			s = 60
		}else if(m === 5 && s === 0){
			m = 4
			s = 60
		}else if(m === 4 && s === 0){
			m = 3
			s = 60
		}else if(m === 3 && s === 0){
			m = 2
			s = 60
		}else if(m === 2 && s === 0){
			m = 1
			s = 60
		}
		else if(m === 1 && s === 0){
			m = 0
			s = 60
		} else if(m === 0 && s === 1) {
			stopInterval();
		}
		s = s -= 1	
//--------------------------------------------
		setTimeout(function(){
			o.disconnect(ctx.destination);
		},1799000)

		if (s < 10) {
        	$(".timerDisplay").html(m + ':0' + s);
    	}
    	else {
        	$(".timerDisplay").html(m + ':' + s);
    	}	
	},1000)
}
//---------------------------------------------------------------//
var ctx = new AudioContext();
var o = ctx.createOscillator();
o.start(0.5);
o.type = "sine";
g = ctx.createGain();
//---------------------------------------------------------------//
$(".chooseChakra").click(function(){
	$(".chooseChakra").fadeOut(100, function(){
		$(".firstRoot").fadeIn(0);
		$(".firstSacral").fadeIn(200);
		$(".firstSolar").fadeIn(300);
		$(".firstHeart").fadeIn(400);
		$(".firstThroat").fadeIn(500);
		$(".firstThird").fadeIn(600);
		$(".firstCrown").fadeIn(700);
	})
});
//---------------------------------------------------------------
$(".firstRoot").click(function(){
	$(".rootImage").css("animation", "rotate 999s");
		$(".firstChakras").animate({opacity: "0"}, function(){
			$(".rootImage").fadeIn("slow")
				$(".f228").fadeIn(100);
				$(".f456").fadeIn(350);
				$(".f912").fadeIn(700);
	});
})
//---------------------------------------------------------------//
$(".f228").click(function(){
	o.frequency.value = 303;
	o.connect(ctx.destination);
		$(".f456").fadeOut("slow")
		$(".f912").fadeOut(700)
		$(".f228").animate({backgroundColor: "red"})
	setTimeout(function(){
			$(".f228").animate({bottom: "380px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
$(".f456").click(function(){
	o.frequency.value = 456;
	o.connect(ctx.destination);
		$(".f228").fadeOut("slow")
		$(".f912").fadeOut(700)
	setTimeout(function(){
			$(".f456").animate({bottom: "380px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
$(".f912").click(function(){
	o.frequency.value = 912;
	o.connect(ctx.destination);
		$(".f228").fadeOut("slow")
		$(".f456").fadeOut(700)
	setTimeout(function(){
			$(".f912").animate({bottom: "380px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
//---------------------------------------------------------------//
$(".min5").click(function(){
	$(".min5").fadeOut(100);
	$(".min15").fadeOut(350);
	$(".min30").fadeOut(700, function(){
		$(".timerDisplay").fadeIn();
//--------------------------------------------
		min5Countdown();
//--------------------------------------------
		function stopInterval(){
			clearInterval(min5StopInverval)
		}	
//--------------------------------------------
	});
})
//--------------------------------------------//
$(".min15").click(function(){
	$(".min5").fadeOut(100);
	$(".min15").fadeOut(350);
	$(".min30").fadeOut(700, function(){
		$(".timerDisplay").fadeIn();
//--------------------------------------------
			min15Countdown();
//--------------------------------------------
		function stopInterval(){
			clearInterval(min5StopInverval)
		}	
//--------------------------------------------
	});
})
//--------------------------------------------//
$(".min30").click(function(){
	$(".min5").fadeOut(100);
	$(".min15").fadeOut(350);
	$(".min30").fadeOut(700, function(){
		$(".timerDisplay").fadeIn();
//--------------------------------------------
		min30Countdown();
//--------------------------------------------
		function stopInterval(){
			clearInterval(min5StopInverval)
		}	
//--------------------------------------------
	});
})
//--------------------------------------------//
$(".firstSacral").click(function(){
	$(".sacralImage").css("animation", "rotate 999s");
		$(".firstChakras").animate({opacity: "0"}, function(){
			$(".sacralImage").fadeIn("slow")
				$(".f303").fadeIn(100);
				$(".f606").fadeIn(350);
				$(".f1212").fadeIn(700);
	});
})
//--------------------------------------------//
$(".f303").click(function(){
	o.frequency.value = 303;
	o.connect(ctx.destination);
		$(".f606").fadeOut("slow")
		$(".f1212").fadeOut(700)
		$(".f303").animate({backgroundColor: "red"})
	setTimeout(function(){
			$(".f303").animate({bottom: "423px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
$(".f606").click(function(){
	o.frequency.value = 606;
	o.connect(ctx.destination);
		$(".f303").fadeOut("slow")
		$(".f1212").fadeOut(700)
	setTimeout(function(){
			$(".f606").animate({bottom: "423px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
$(".f1212").click(function(){
	o.frequency.value = 1212;
	o.connect(ctx.destination);
		$(".f303").fadeOut("slow")
		$(".f606").fadeOut(700)
	setTimeout(function(){
			$(".f1212").animate({bottom: "423px"},700, function(){
				$(".min5").fadeIn(100);
				$(".min15").fadeIn(350);
				$(".min30").fadeIn(700);
			})
	},700)
})
//--------------------------------------------//



























































})//document.ready