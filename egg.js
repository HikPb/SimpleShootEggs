class egg{
    constructor(game,row ,col){
        this.game = game;
        this.row = row;
        this.col = col;
        this.isImageLoaded = false;
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.image = null;
        this.color = this.getRandomColor();
        this.loadImage();
        this.calculatePos();
    }

    calculatePos(){
        this.x = EGG_DIAMETTER * this.col;
        this.y = ROw_HEIGHT * this.row;
    }
    loadImage(){
        this.image = new Image;
        this.image.onload = ()=>{
            this.isImageLoaded = true;
        }
        this.image.src = 'image/'+ this.color + '.png';
    }

    getRandomColor(){
        let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'purblue'];
        let r = Math.round(Math.random()*5);
        return colors[r];
    }

    update(){

    }

    draw(){
        if(! this.isImageLoaded){
            return;
        }

        this.game.context.drawImage(
            this.image, 
            this.x,
            this.y
        );
    }
}