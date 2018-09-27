function Drop(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = 6;
    this.ToDelete = false;

    this.show = function () {
        noStroke();
        fill(170, 205, 255);
        ellipse(this.x, this.y, this.r * 2);
    }
    this.move = function () {
        this.y = this.y - 2;
    }
    this.hits = function (flower) {
        var distance = dist(this.x, this.y, flower.x, flower.y);
        if (distance < this.r + flower.r) {
            return true;
        } else {
            return false;
        }
    }
    this.destroyit = function () {
        this.ToDelete = true;
    }
}
