let player;
let pressedKeys = {};
function setup() {
    createCanvas(600, 600);
    player = new Player(width/2, height/2);
}

function draw () {
    background(220);
    player.update();
    player.draw();
}


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.speed = 4;
    }
    update(){
        let mvmt = createVector(0, 0);

       if(keyIsPressed) {
        if(key === 'a' ) {
            mvmt.x -= 1;
        }
       
       if (key === 'd'){
        mvmt.x += 1;
       }

       if (key === 'w') {
        mvmt.y -= 1;
       }

       if (key === 's') {
        mvmt.y += 1;
       }
    }
       
        
        mvmt.setMag(this.speed);
        
        this.x += mvmt.x;
        this.y += mvmt.y;
    }
    
    draw(){
        fill(255, 0, 0);
        rect(this.x, this.y, 30);
    }
} 



//deswa


