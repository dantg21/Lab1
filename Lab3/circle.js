export default class Circle {

	constructor(color){
		this.color = color;

		this.x = getRandomInt(600);
		this.y = getRandomInt(300);
		this.radius = getRandomArbitrary(10, 30)
	}

}

function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  	return Math.random() * (max - min) + min;
}