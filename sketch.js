var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    //drop = new Drop(200,height-20);
    for (i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * 70 + 70, 60);
    }
}

function draw() {

    background(51);
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
    }

    ship.show();
    ship.move()
    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++) {

            if (hits = drops[i].hits(flowers[j])) {
                drops[i].destroyit();
                flowers[j].destroyit();
            }

        }
    }
    for (var i = 0; i < drops.length; i++) {

        if (drops[i].ToDelete) {
            drops.splice(i, 1);
        }

    }

    for (var i = 0; i < flowers.length; i++) {

        if (flowers[i].ToDelete) {
            flowers.splice(i, 1);
        }
    }

    if (flowers.length == 0) {
        rectMode(CENTER);
        textSize(32);
        text('You win!', width / 2, height / 2);
    }


}


function keyPressed() {
    if (key === ' ') {

        var drop = new Drop(ship.x, height);
        drops.push(drop);

    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);

    }
}

function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}
