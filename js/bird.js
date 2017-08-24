


function Bird() {
	this.imgs = [];
	for(var i = 0; i < 8; i++){
		this.imgs[i] = new Image();
		this.imgs[i].src = 'img/bird_' + i + '.jpg'
	}
	this.weight = 56;
	this.height = 48;
	this.x = 216;
	this.y = 322;
	this.g = .5;
	this.v = 0;
	this.index = 0;
}

Bird.prototype.fly = function () {
	ctx.drawImage(this.imgs[Math.ceil(this.index) % 8], this.x - 28, this.y - 24);
	this.v += this.g 
	this.y += this.v + .5 * this.g;
	this.index += .2;
}

Bird.prototype.pass = function (column1, column2) {
	return this.x === column1.x || this.x === column2.x;
}

Bird.prototype.hit = function (column1, column2, ground){
	if(this.y >= ground.y){
		return true;
	}
	if(this.y <= 0){
		return true;
	}
	if(this.y + this.height > column1.y + column1.distance / 2 + 600 || this.y - this.height < column1.y - column1.distance / 2 + 600){
		if(this.x <= column1.x + column1.gap && this.x >= column1.x){
			console.log(1)
			return true;
		}
		console.log(1)
		return false;
	}
	if(this.y + this.height > column2.y + column2.distance / 2 + 600 || this.y - this.height < column2.y - column2.distance / 2 + 600){
		if(this.x <= column2.x + column2.gap && this.x >= column2.x){
			return true;
		}
		return false;
	}
	return false;
}






