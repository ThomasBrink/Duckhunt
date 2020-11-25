var eend = document.getElementById("eend");
var button_1 = document.getElementById("button_1");

button_1.addEventListener("click", function(){
	flyO();
});

function flyO(){
	document.getElementById("eend").style.marginTop = "75px"
}

function flyW(){
	document.getElementById("eend").style.marginRight = "75px"
}


