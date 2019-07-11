/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

function GameObject(gameObj){
  this.createdAt = gameObj.createdAt;
  this.name = gameObj.name;
  this.dimensions = gameObj.dimensions;
};

GameObject.prototype.destroy = function(){
  console.log(`${this.name} was removed from the game.`)
};

CharacterStats.prototype = Object.create(GameObject.prototype);

function CharacterStats(statsObj){
  GameObject.call(this, statsObj);
  this.healthPoints = statsObj.healthPoints;
};

CharacterStats.prototype.takeDamage = function(){
  console.log(`${this.name} took damage.`)
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

function Humanoid(humObj){
  CharacterStats.call(this, humObj);
  GameObject.call(this, humObj);
  this.team = humObj.team;
  this.weapons = humObj.weapons;
  this.language = humObj.language;
};

Humanoid.prototype.greet = function(){
  console.log(`${this.name} offers a greeting in ${this.language}.`);
};

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
	constructor(gameObj){
		this.createdAt = gameObj.createdAt;
		this.name = gameObj.name;
		this.dimensions = gameObj.dimensions;
	}

	destroy() {
		console.log(`${this.name} was removed from the game.`)
	}
}

class CharacterStats extends GameObject {
	constructor(statsObj){
		super(statsObj);
		this.healthPoints = statsObj.healthPoints;
	}


	takeDamage() {
		console.log(`${this.name} took damage.`)
	}
}


class Humanoid extends CharacterStats {
	constructor(humObj){
		super(humObj);
		this.team = humObj.team;
		this.weapons = humObj.weapons;
		this.language = humObj.language;
	}

	greet() {
		console.log(`${this.name} offers a greeting in ${this.language}.`)
	}
}




