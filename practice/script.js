const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 180;
let y = 350;
let speed = 10;

function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 40, 40);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" || event.key === "d") {
        x = x + speed;
    }

    if (event.key === "ArrowLeft" || event.key === "a") {
        x = x - speed;
    }

    drawPlayer();
});

drawPlayer();