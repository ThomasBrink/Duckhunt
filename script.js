var eend = document.getElementById("eend");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");


var pixelsO = 0;
var pixelsN = 0;
var pixelsZ = 0;
var pixelsW = 0;


button_1.addEventListener("click", function(){
	flyO();
});

button_2.addEventListener("click", function(){
	flyN();
});

button_3.addEventListener("click", function(){
	flyZ();
});

button_4.addEventListener("click", function(){
	flyW();
});

function flyO(){
	for(i=0; i<75; i++){
		pixelsO++
	}
	eend.style.left = pixelsO + "px"
}

function flyN(){
	for(i=0; i<75; i++){
		pixelsN++
	}
	eend.style.bottom = pixelsN + "px"
}

function flyZ(){
	for(i=0; i<75; i++){
		pixelsZ++
	}
	eend.style.top =  pixelsZ + "px"
}

function flyW(){
	for(i=0; i<75; i++){
		pixelsW++
	}
	eend.style.right = pixelsW + "px"
}








