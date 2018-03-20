
Function.prototype.inherits = function(parent) {
  var Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject (name) {
  this.name = name;
}
MovingObject.prototype.move = function() {
  console.log(`${this.name} moved`);
};

function Ship (name, speed, power) {
    MovingObject.call(this, name);
    this.speed = speed;
    this.power = power;
}
Ship.inherits(MovingObjeAct);
Ship.prototype.shoot = function() {
  console.log(`Shooted at this ${this.speed} at power of ${this.power}`);
};




function Asteroid (name, size) {
    MovingObject.call(this, name);
    this.size = size;
}
Asteroid.inherits(MovingObject);

Asteroid.prototype.split = function() {
  console.log(`Asteroid broke apart!`);
};
