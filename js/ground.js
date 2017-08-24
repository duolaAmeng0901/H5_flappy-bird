

function Ground() {
	var img = new Image();
	img.src = 'img/ground.jpg';
	this.img = img;
	this.x = -20;
	this.y = 498;
	this.speed = -5;
	
}


Ground.prototype.sport = function () {
	ctx.drawImage(this.img, this.x, this.y)
	this.x += this.speed;
	(this.x <= -200) && (this.x = -20)
}