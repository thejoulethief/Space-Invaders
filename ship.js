function Ship() {
    this.x = width / 2;
    this.y = height;
    this.dir = 0;

    this.show = function () {
        rectMode(CENTER);
        fill(255);
        rect(this.x, height - 25, 30, 50);
        fill(150, 204, 255);
        triangle(this.x - 13, height, this.x + 1, height - 50, this.x + 15, height);

    }
    this.setDir = function (dir) {
        this.dir = dir;
    }
    this.move = function () {
        this.x += this.dir * 5;
    }
}
