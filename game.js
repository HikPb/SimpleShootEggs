class game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    init(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

        //create bow
        this.bow = new bow(this);
    }
    loop(){
        this.update();
        this.draw();
        setTimeout(()=>this.loop(), 20);
    }
    update(){
        this.bow.update();
    }
    draw(){
        this.bow.draw();
    }
}

var g = new game();