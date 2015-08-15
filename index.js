var header_findlist = document.getElementById('header_findlist');
var cancel = document.getElementById('cancel');
	header_findlist.addEventListener("touchstart", function(e){
     	document.getElementById('background').style.display = "block";
	});
	cancel.addEventListener("touchstart", function(){
     	document.getElementById('background').style.display = "none";
     	document.getElementById('cancel').style.color = "#8dda5e";
	});
var nav_one = document.getElementById('nav_one');
	nav_one.addEventListener("touchstart", function(){
     	document.getElementById('nav_tow').style.display = "block";
     	document.getElementById('background').style.display = "block";
	});