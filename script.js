var richting = ["left", "right", "up", "down"];
var eend = document.getElementById("eend")
var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var down = document.getElementById("down");
var PosLeft = 675;
var PosTop = 270;
var random

// na 10 uit beeld


setInterval(function(){ 
	 random = 0 //Math.floor(Math.random() * 4) + 0;
	 console.log(random)
	 var number = richting[random];
	 moveduck(number);
		}, 1000);

function moveduck(richting){
	if(richting == "left"){
		PosLeft -= 75;
		eend.style.left = PosLeft + "px";
		 if(PosLeft <= 0){
		 	PosLeft = PosLeft - 0;
		 }
	}

	else if(richting == "right"){
		PosLeft += 75;
		eend.style.left = PosLeft + "px";
	}

	else if(richting == "up"){
		PosTop -= 75;
		eend.style.top = PosTop + "px";
	}
	else{
		PosTop += 75;
		eend.style.top = PosTop + "px";
	}

}

left.addEventListener("click", function(){
	PosLeft -= 75;
	eend.style.left = PosLeft + "px";
});

right.addEventListener("click", function(){
	PosLeft += 75;
	eend.style.left = PosLeft + "px";
});

up.addEventListener("click", function(){
	PosTop -= 75;
	eend.style.top = PosTop + "px";
});

down.addEventListener("click", function(){
	PosTop += 75;
	eend.style.top = PosTop + "px";
});









