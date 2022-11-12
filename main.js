const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
var background_image, rover_image = "./rover.png";
var backgroundTag, roverTag;
var roverWidth = 100, roverHeight = 90;
var roverX = 100, roverY = 10;

var imgArray = ["./marsImg1.jpeg", "./marsImg2.jpg", "./marsImg3.jpg", "./marsImg4.jpeg", "./marsImg5.jpg"];

var currentImgIdx = Math.floor(Math.random() * (imgArray.length - 1) + 1);

background_image = imgArray[currentImgIdx];

function add() {
    backgroundTag = new Image();
    backgroundTag.onload = uploadBackground;
    backgroundTag.src = background_image;

    roverTag = new Image();
    roverTag.onload = uploadRover;
    roverTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener('keydown', keyDown);


function keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '40') {
        down();
    }
    if (keyPressed == '37') {
        left();
    }
    if (keyPressed == '39') {
        right();
    }
}


function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log(roverX, roverY);
        uploadBackground();
        uploadRover();
    }
}


function down() {
    if (roverY <= 500) {
        roverY = roverY + 10;
        console.log(roverX, roverY);
        uploadBackground();
        uploadRover();
    }
}


function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log(roverX, roverY);
        uploadBackground();
        uploadRover();
    }
}


function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        console.log(roverX, roverY);
        uploadBackground();
        uploadRover();
    }
}
