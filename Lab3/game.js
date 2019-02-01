export default class Game {
	
	constructor(max_points) {
		this.max_points = max_points;
		this.points = 0;
	}

	isOver(){
		console.log(this.max_points);
		console.log(this.points);

		if(this.points >= this.max_points){
			return true;
		}
		else{
			return false;
		}
	}

	reset(){
		this.points = 0;
	}

	hit(){
		this.points = this.points + 1;
	}

}
