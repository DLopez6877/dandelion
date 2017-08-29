function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.angle = PI/random(5,7);
  this.middleAngle = this.angle + 70;
  this.downAngle = this.angle + 140;
}

Branch.prototype.show = function () {
  stroke(255);
  line(this.begin.x, this.begin.y, this.end.x, this.end.y);
};

Branch.prototype.jitter = function () {
  this.end.x += random(-1, 1);
  this.end.y += random(-1, 1);
};

Branch.prototype.blowAway = function () {
  this.end.x += random(0,6);
  this.end.y += random(0,-6);
};

Branch.prototype.branchLeft = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.angle * -1);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var left = new Branch(this.end, newEnd);
  return left;
}

Branch.prototype.branchRight = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.angle);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var right = new Branch(this.end, newEnd);
  return right;
}

Branch.prototype.branchMiddleLeft = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.middleAngle * -1);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var left = new Branch(this.end, newEnd);
  return left;
}

Branch.prototype.branchMiddleRight = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.middleAngle);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var right = new Branch(this.end, newEnd);
  return right;
}

Branch.prototype.branchBottomLeft = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.downAngle * -1);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var left = new Branch(this.end, newEnd);
  return left;
}

Branch.prototype.branchBottomRight = function() {
  var dir = p5.Vector.sub(this.end, this.begin);
  dir.rotate(this.downAngle);
  dir.mult(0.55);
  var newEnd = p5.Vector.add(this.end, dir);
  var right = new Branch(this.end, newEnd);
  return right;
}
