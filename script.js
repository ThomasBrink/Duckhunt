var richting = ["W", "O", "N", "Z", "NO", "ZO", "ZW", "NW" ];
var eend = document.getElementById("eend");
var hit = document.getElementById("hit");
var miss = document.getElementById("miss");
var hit2 = document.getElementById("hit2");
var miss2 = document.getElementById("miss2");
var misspoint = document.getElementById("misspoint");
var gameover = document.getElementById("gameover");
var stats = document.getElementById("stats");
var PosLeft = 675;
var PosTop = 270;
var random;
var shots = 20;
var hits = 0;
var misscount = 0;


setInterval(function(){ 
	 random = Math.floor(Math.random() * 8) + 0;
	 var number = richting[random];
	 moveduck(number);
		}, 500);

function moveduck(richting){
	if(richting == "W"){
		if(PosLeft < 1){
			PosLeft = PosLeft - 0;
		}
		else{
			PosLeft -= 75;
			eend.style.left = PosLeft + "px";
		}
	}

	else if(richting == "O"){
		if(PosLeft > 1350){
			PosLeft = PosLeft - 0;
		}
		else{
			PosLeft += 75;
			eend.style.left = PosLeft + "px";
		}
	}

	else if(richting == "N"){
		if(PosTop < 1){
			PosTop = PosTop - 0;
		}
		else{
			PosTop -= 75;
			eend.style.top = PosTop + "px";
		}
	}

	else if(richting == "Z"){
		if(PosTop > 495){
			PosTop = PosTop - 0;
		}
		else{
			PosTop += 75;
			eend.style.top = PosTop + "px";
		}
	}

	else if(richting == "NO"){
		if(PosTop < 1 || PosLeft > 1350){
			PosTop = PosTop - 0;
		}
		else{
			PosTop -= 75;
			eend.style.top = PosTop + "px";
			PosLeft += 75;
			eend.style.left = PosLeft + "px";
		}
	}

	else if(richting == "ZO"){
		if(PosLeft > 1350 || PosTop > 495){
			PosTop = PosTop - 0;
		}
		else{
			PosLeft += 75;
			eend.style.left = PosLeft + "px";
			PosTop += 75;
			eend.style.top = PosTop + "px";
		}
	}

	else if(richting == "ZW"){
		if(PosTop > 495 || PosLeft < 1){
			PosTop = PosTop - 0;
		}
		else{
			PosTop += 75;
			eend.style.top = PosTop + "px";
			PosLeft -= 75;
			eend.style.left = PosLeft + "px";
		}
	}
	else if(richting == "NW"){
		if(PosTop < 1){
			PosTop = PosTop - 0;
		}
		else{
			PosTop -= 75;
			eend.style.top = PosTop + "px";
			PosLeft -= 75;
			eend.style.left = PosLeft + "px";
		}
	}

}

eend.addEventListener("click", function(){
	hits++;
	shots--;
	console.log(shots);
	hit.innerText = hits;
	Done();
});

misspoint.addEventListener("click", function(){
	misscount++
	shots--;
	console.log(shots);
	miss.innerText = misscount;
	Done();
});


function Done(){
	if(shots == 0){
		hit2.innerText = hits;
		miss2.innerText = misscount;
		eend.style.display = "none";
		gameover.style.display = "inline-block";
		stats.style.display = "none";
	}
};









	

