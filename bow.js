class bow{
    constructor(game){
        this.game = game;
        this.image = null;
        this.isImageLoaded = false;
        
        this.x = EGG_START_X;
        this.y = EGG_START_Y;
        this.color = this.getRandomColor();
        this.loadImage();
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
            this.x - EGG_RADIUS,
            this.y - EGG_RADIUS
        );
    }
}