class arrow{
    constructor(game){
        this.game = game;
        this.mousePos = null;
    }

    setMousePos(newMousePos){
        this.mousePos = newMousePos;
    }
    draw(){
        if(this.mousePos == null){
            return;
        }
        this.game.context.beginPath();
        this.game.context.strokeStyle = "#FFFFFF";
        this.game.context.moveTo(EGG_START_X,EGG_START_Y);
        this.game.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.game.context.stroke();
    }
}