var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var width = canvas.clientWidth;
var height = canvas.clientHeight;
var imgStart = new Image();
var imgOver = new Image();

var state = 'start';

var socre = 0;

imgStart.src = 'img/start.jpg';
imgOver.src = 'img/over.jpg';


var classes = null;

window.addEventListener('load', init, false)

function init() {
	
	classes = start();
	canvas.addEventListener('click', handle, false)
}


function over(timer) {
	clearInterval(timer);
	ctx.clearRect(0, 0, width,height);
	ctx.drawImage(imgOver, 0, 0);
	state = 'over';
}



function start() {

	var ground = new Ground();
	var column1 = new Column(0);
	var column2 = new Column(1);
	var bird = new Bird();

	ctx.clearRect(0, 0, width,height);
	ctx.drawImage(imgStart, 0, 0);
	state = 'start';

	return {
		ground,
		column1,
		column2,
		bird
	}

}


function handle() {
	if(state === 'start'){
		gaming();
	}else if(state === 'gaming'){
		jump();
	}else{
		classes = start();
	}
}

function gaming() {

	ctx.clearRect(0, 0, width,height);

	var timer = setInterval(function () {
		ctx.clearRect(0, 0, width,height)
		classes.ground.sport();
		classes.column1.sport();
		classes.column2.sport();
		classes.bird.fly();
		judge(timer);
		add();
	},40)

	state = 'gaming'
}


function jump() {
	classes.bird.v = -6;
}


function judge(timer) {
	if(classes.bird.hit(classes.column1, classes.column2, classes.ground)){
		over(timer)
	}
}


function add() {
	if(classes.bird.pass(classes.column1, classes.column2)){
		score++;
	}
}







































