var dandelion = [];

var counter = 0;


function setup() {
  createCanvas(1000, 1000);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, 550);
  var root = new Branch(a, b);

  dandelion[0] = root;
}

function mousePressed() {
  if (counter < 6) {
    for (var i = dandelion.length - 1; i >= 0; i--) {
      if (!dandelion[i].finished) {
        dandelion.push(dandelion[i].branchLeft());
        dandelion.push(dandelion[i].branchRight());
        dandelion.push(dandelion[i].branchBottomLeft());
        dandelion.push(dandelion[i].branchBottomRight());
      }
      dandelion[i].finished = true;
    }
  }
  if (counter < 7) {
    counter++;
  }
}

function draw() {
  background(51);

  for (var i = 0; i < dandelion.length; i++) {
    if (counter <= 3){
      dandelion[i].show();
    } else if (counter > 3 && counter != 7) {
      dandelion[i].jitter();
      dandelion[i].show();
    } else if (counter === 7 && i > 4){
      dandelion[i].show();
      dandelion[i].blowAway();
    } else if (counter === 7 && i > 0){
      dandelion[i].blowAway();
    } else {
      dandelion[0].show();
      dandelion[0].jitter();
      setTimeout( function(){
        dandelion[0].end.x += 8;
        dandelion[0].end.y -= 2;
        dandelion[0].begin.y -= 5;
        dandelion[0].begin.x += 4;
      },3000);

    }
  }

}
