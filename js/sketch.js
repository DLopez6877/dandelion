var dandelion = [];

var counter = 0;


function setup() {
  createCanvas(600, 600);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, 320);
  var root = new Branch(a, b);

  dandelion[0] = root;
}

function mousePressed() {
  if (counter < 4) {
    for (var i = dandelion.length - 1; i >= 0; i--) {
      if (!dandelion[i].finished) {
        dandelion.push(dandelion[i].branchLeft());
        dandelion.push(dandelion[i].branchRight());
        dandelion.push(dandelion[i].branchMiddleLeft());
        dandelion.push(dandelion[i].branchMiddleRight());
        dandelion.push(dandelion[i].branchBottomLeft());
        dandelion.push(dandelion[i].branchBottomRight());
      }
      dandelion[i].finished = true;
    }
  }
  if (counter < 5) {
    counter++;
  }
}

function draw() {
  background(51);

  for (var i = 0; i < dandelion.length; i++) {
    if (counter <= 3){
      dandelion[i].show();
    } else if (counter > 3 && counter != 5) {
      dandelion[i].jitter();
      dandelion[i].show();
    } else if (counter === 5 && i > 6){
      dandelion[i].show();
      dandelion[i].blowAway();
    } else if (counter === 5 && i > 0){
      dandelion[i].blowAway();
    } else {
      dandelion[0].show();
      dandelion[0].jitter();
      setTimeout( function(){
        dandelion[0].end.x += 8;
        dandelion[0].end.y -= 2;
        dandelion[0].begin.y -= 5;
        dandelion[0].begin.x += 4;
      },1500);

    }
  }

}
