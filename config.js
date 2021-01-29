let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let CANVAS_WIDTH = 900, CANVAS_HEIGHT = 720;
let play, snake, food;
let box = 30;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;