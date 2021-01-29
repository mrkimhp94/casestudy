let Food = function () {
    let size = 30,
        x = Math.floor(Math.random() * (CANVAS_WIDTH / size)) * size,
        y = Math.floor(Math.random() * (CANVAS_HEIGHT / size)) * size;

    this.newPosition = function () {
        x = Math.floor(Math.random() * (CANVAS_WIDTH / size)) * size;
        y = Math.floor(Math.random() * (CANVAS_HEIGHT / size)) * size;
    }
    this.drawFood = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, size, size);
    }
    this.getPosition = function () {
        return {
            x: x,
            y: y
        }
    }
}