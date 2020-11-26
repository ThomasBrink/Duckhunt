var eend = document.getElementById("eend");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");

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

function flyO(){
	for(i=0; i<75; i++){
		pixelsO++
	}
	eend.style.marginLeft = pixelsO + "px"
}

function flyN(){
	for(i=0; i<75; i++){
		pixelsN++
	}
	eend.style.marginBottom = pixelsN + "px"
}

function flyZ(){
	for(i=0; i<75; i++){
		pixelsZ++
	}
	eend.style.marginTop =  pixelsZ + "px"
}

function flyW(){
	for(i=0; i<75; i++){
		pixelsW++
	}
	eend.style.marginRight = pixelsW + "px"
}







