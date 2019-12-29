class bow{
    constructor(game){
        this.game = game;
        this.image = null;
        this.setOriginalAttribute();
    }

    setOriginalAttribute(){
        this.isImageLoaded = false;
        this.speed = EGG_SPEED;
        this.speedX = 0;
        this.speedY = 0;
        this.isMoving = false;
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

    fire(mousePos){
        if(this.isMoving) return;
        let deg = Math.atan2(mousePos.y - this.y, mousePos.x - this.x);
        this.speedX = this.speed * Math.cos(deg);
        this.speedY = this.speed * Math.sin(deg);
        this.isMoving = true;
    }
    update(){
        if(this.x - EGG_RADIUS <= 0 || this.x + EGG_RADIUS >= GAME_WIDTH){
            this.speedX = -this.speedX;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.y - EGG_RADIUS <= 0){
            this.setOriginalAttribute();
        }
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