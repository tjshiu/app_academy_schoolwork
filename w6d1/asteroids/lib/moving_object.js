function MovingObject(hash) {
  this.pos = hash['pos'];
  this.vel = hash['vel'];
  this.radius = hash['radius'];
  this.color = hash['color'];
}

module.exports = MovingObject;
