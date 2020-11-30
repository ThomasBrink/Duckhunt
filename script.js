var richting = ["left", "richt", "up", "down"];
var eend = document.getElementById("eend")
var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var down = document.getElementById("down");
var PosLeft = 670;
var PosTop = 270;
var random


setInterval(function(){ 
	 random = Math.floor(Math.random() * 4) + 0;
	 console.log(random)
	if(random == 0){
		moveleft();
	}
	else if(random == 1){
		moveright();
	}

	else if(random == 2){
		moveup();
	}
	else if(random == 3){
		movedown();
	}
		}, 1000);

function moveduck(richting){
	if(richting == "left"){
		PosLeft -= 75;
		eend.style.left = PosLeft + "px";
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

function moveleft(){
	PosLeft -= 75;
	eend.style.left = PosLeft + "px";
}

function moveright(){
	PosLeft += 75;
	eend.style.left = PosLeft + "px";
}

function moveup(){
	PosTop -= 75;
	eend.style.top = PosTop + "px";
}

function movedown(){
	PosTop += 75;
	eend.style.top = PosTop + "px";
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









