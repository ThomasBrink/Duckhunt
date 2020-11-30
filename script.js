var richting = ["left", "right", "up", "down"];
var eend = document.getElementById("eend")
var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var down = document.getElementById("down");
var hit = document.getElementById("hit");
var miss = document.getElementById("miss");
var container = document.getElementById("container");
var PosLeft = 675;
var PosTop = 270;
var random
var hits = 0;
var miss = 0;


setInterval(function(){ 
	 random = Math.floor(Math.random() * 4) + 0;
	 var number = richting[random];
	 moveduck(number);
		}, 1000);

function moveduck(richting){
	if(richting == "left"){
		if(PosLeft < 1){
			PosLeft = PosLeft - 0;
		}
		else{
		PosLeft -= 75;
		eend.style.left = PosLeft + "px";
		}
	}

	else if(richting == "right"){
		if(PosLeft > 1350){
			PosLeft = PosLeft - 0;
		}
		else{
		PosLeft += 75;
		eend.style.left = PosLeft + "px";
		}
	}

	else if(richting == "up"){
		if(PosTop < 1){
			PosTop = PosTop - 0;
		}
		else{
		PosTop -= 75;
		eend.style.top = PosTop + "px";
		}
	}
	else{
		if(PosTop > 495){
			PosTop = PosTop - 0;
		}
		else{
		PosTop += 75;
		eend.style.top = PosTop + "px";
		}
	}

}

eend.addEventListener("click", function(){
	hits++
	hit.innerText = hits;
});

container.addEventListener("click", function(){
	miss++
	console.log(miss)
	miss.innerText = miss;
});










