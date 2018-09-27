function Flower(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.ToDelete = false;

    this.show = function () {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r * 2);
    }
    this.destroyit = function () {
        fill(255, 0, 0);
        this.r = 5;
        this.ToDelete = true;
    }
}
