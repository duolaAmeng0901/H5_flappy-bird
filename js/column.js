


function Column(index) {
	var img = new Image();
	img.src = 'img/column.jpg';
	this.x = 500 + 300 * index;
	this.y = 322 - Math.round((Math.random() - 0.5)  * 150) - 600;
	this.speed = -5;
	this.img = img;
	this.distance = 245;
	this.gap = 144;
}

Column.prototype.sport = function () {
	ctx.drawImage(this.img, this.x, this.y);
	this.x += this.speed;
	(this.x <= -100) && ((this.x = 500) && ( this.y = 322 - Math.round((Math.random() - 0.5)  * 150) - 600))
}