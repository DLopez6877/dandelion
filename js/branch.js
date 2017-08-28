function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.angle = PI/random(3,7);
  this.downAngle = this.angle + 70;
  this.jitter = function() {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }
  this.blowAway = function() {
    this.end.x += random(0,17);
    this.end.y += random(0,-8);
  }

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branchLeft = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.angle * -1);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var left = new Branch(this.end, newEnd);
    return left;
  }

  this.branchRight = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.angle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  }

  this.branchBottomLeft = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.downAngle * -1);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var left = new Branch(this.end, newEnd);
    return left;
  }

  this.branchBottomRight = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(this.downAngle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  }

}
