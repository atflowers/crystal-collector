var scoreGoal, scoreCurrent, blueValue, redValue, greenValue, yellowValue;
var gameWins = gameLosses = 0;

$( document ).ready(function() {
	reset();

    $("#blue-gem").click(function(){
    	scoreCurrent += blueValue;
    	$("#scoreCurrent").html(scoreCurrent);
    	checkScore();
	});
	$("#red-gem").click(function(){
    	scoreCurrent += redValue;
    	$("#scoreCurrent").html(scoreCurrent);
    	checkScore();
	});
	$("#green-gem").click(function(){
    	scoreCurrent += greenValue;
    	$("#scoreCurrent").html(scoreCurrent);
    	checkScore();
	});
	$("#yellow-gem").click(function(){
    	scoreCurrent += yellowValue;
    	$("#scoreCurrent").html(scoreCurrent);
    	checkScore();
	});
});

function reset (){
	scoreGoal = Math.floor(Math.random()*(120-19) + 19);
	blueValue = Math.floor(Math.random()*11 + 1);
	redValue = Math.floor(Math.random()*11 + 1);
	greenValue = Math.floor(Math.random()*11 + 1);
	yellowValue = Math.floor(Math.random()*11 + 1);
	scoreCurrent = 0;

	$("#scoreGoal").html(scoreGoal);
	$("#scoreCurrent").html(scoreCurrent);
}

function checkScore(){
	if (scoreCurrent == scoreGoal) {
		gameWins++;
		$("#gameWins").html(gameWins);
		reset();
	}
	if (scoreCurrent >= scoreGoal) {
		gameLosses++;
		$("#gameLosses").html(gameLosses);
		reset();
	}
}