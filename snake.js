
let Snake = function () {
    this.head = {x: 0, y: 0}
    this.speed = {x: 0, y: 0}
    this.length = 0;
    this.body = [];
    this.score = 0;
    this.time =150
    this.update = function () {
        this.body.push({x: this.head.x, y: this.head.y});
        this.head.x += this.speed.x * box
        this.head.y += this.speed.y * box
        this.head.x = (this.head.x + CANVAS_WIDTH) % CANVAS_WIDTH
        this.head.y = (this.head.y + CANVAS_HEIGHT) % CANVAS_HEIGHT
        if (this.length < this.body.length) {
            this.body.shift();
        }
        for (let body of this.body) {
            if (body.x === this.head.x && body.y === this.head.y) {
                gameOver()
            }
        }
        if (snake.head.x === food.getPosition().x && snake.head.y === food.getPosition().y) {
            snake.length++;
            this.score++;
            this.time -= 10
            food.newPosition();
        }
    }
    this.getScore = function () {
        return this.score
    }
    this.drawSnake = function () {
        ctx.fillStyle = 'white'
        ctx.fillRect(this.head.x, this.head.y, box, box);
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = "#000";
            ctx.fillRect(this.body[i].x, this.body[i].y, box-1, box-1);
        }
    }
}