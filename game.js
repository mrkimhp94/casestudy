

function drawScreen() {
    ctx.fillStyle = '#5c7';
    ctx.fillRect(0, 0, 930, 750);
}

function gameOver() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = '#fff';
    ctx.font = '90px Verdana';
    ctx.fillText('Game Over', (CANVAS_WIDTH - 300) / 2, CANVAS_HEIGHT / 2, 300);
    ctx.font = '90px Verdana';
    ctx.fillText(snake.getScore() + ' Point', (CANVAS_WIDTH - 180) / 2, (CANVAS_HEIGHT + 150) / 2, 600);
    clearInterval(play);
}
function start() {
    snake = new Snake();
    food = new Food();
}
start();
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 38 && snake.speed.y !== 1) {
        snake.speed.y = -1;
        snake.speed.x = 0;
    } else if (e.keyCode === 40 && snake.speed.y !== -1) {
        snake.speed.y = 1;
        snake.speed.x = 0;
    } else if (e.keyCode === 37 && snake.speed.x !== 1) {
        snake.speed.y = 0;
        snake.speed.x = -1;
    } else if (e.keyCode === 39 && snake.speed.x !== -1) {
        snake.speed.y = 0;
        snake.speed.x = 1;
    }
})
function GameLoop() {
    drawScreen();
    food.drawFood()
    snake.drawSnake();
    snake.update();

}

play = setInterval(GameLoop,120);