var num = 6
var myColor = boxColors(num)
var myPick = pickedColor()
var boxes = $(".boxes")
var header = $("h1")
var stripe = $(".underHeadStripe")
var container = $("#container")
var resetBox = $("#reset")
var hardMode = $("#hard")
var easyMode = $("#easy")

reset();
clickBox();



	

// when hard button clicked
hardMode.click(function(){
	num = 6;
	reset();
});

// when easy button clicked
easyMode.click(function(){
	num = 3;
	reset();
});

// set random colors to boxes
resetBox.click(function(){
	reset();	
})

// button animate function
function buttonAnimate(){
	$("button").mouseenter(function(){
		$(this).css("backgroundColor", "steelblue");
		$(this).css("color", "white")
	})
	$("button").mouseout(function(){
		$(this).css("backgroundColor", "white");
		$(this).css("color", "steelblue")
	})
}

// response on clicking box function
function clickBox(){
$(boxes).click(function(){
	var clickedBox = $(this).css("backgroundColor")
	if(clickedBox === myPick){
		$(boxes).css("backgroundColor", myPick);
		$("h1").css("backgroundColor", myPick);
		$("#displayMessage").text("Correct");
	}
	else{
		$(this).css("backgroundColor", "#232323");
		$("#displayMessage").text("Wrong, Try Again");
		
	}	
})
}

// reset function

function reset(){
	myColor = boxColors(num);
	myPick = pickedColor();

	buttonAnimate();
	$("#pickedColorDisplay").text(myPick);
	for(var i = 0; i < boxes.length; i++){
		if(myColor[i]){
			$(boxes[i]).css("backgroundColor", myColor[i]);
			$(boxes[i]).css("display", "block");
		}
		else{
			$(boxes[i]).css("display", "none");
		}
	}
}


function pickedColor(){
	var pick = Math.floor(Math.random() * num);
	return myColor[pick];
}

// array of random colors

var num = 6
function boxColors(num){
	var colorsList = [];
	for(var i = 0; i < num; i++){
		colorsList.push(randomColor());
	}
	return colorsList;
}

// generate random rgb colors
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
		return "rgb("+r+", "+g+", "+b+")"
}
