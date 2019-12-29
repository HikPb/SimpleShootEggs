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

        //create grid
        this.grid = new grid(this);
        //create bow
        this.bow = new bow(this);

        this.arrow = new arrow(this);

        this.listenMouseEvent();
    }

    getMousePos(evt){
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
          };
    }
    listenMouseEvent(){
        this.canvas.addEventListener("mousemove", (event)=>{
            let mousePos = this.getMousePos(event);
            //draw arrow
            this.arrow.setMousePos(mousePos);
        });
        this.canvas.addEventListener("click", (event)=>{
            let mousePos = this.getMousePos(event);
            console.log(mousePos);
            this.bow.fire(mousePos);
        });
    }
    loop(){
        this.update();
        this.draw();
        setTimeout(()=>this.loop(), 20);
    }
    update(){
        this.bow.update();
        this.grid.update();
    }
    draw(){
        this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.arrow.draw();
        this.bow.draw();
        this.grid.draw();
    }
}

var g = new game();