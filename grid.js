class grid{
    constructor(game){
        this.game = game;
        this.y = 0;
        this.listEggs = [];
        //this.createEggs();
    }

    createEggs(){
        for(let row = 0; row < 4 ; row ++){
            let rowEggs = [];
            let l;
            if(row%2==0) {
                l =10;
            }else l = 9;
            for(let col = 0; col< l; col++){
                let newEgg = new egg(this.game, row ,col);
                rowEggs.push(newEgg);
            }
            this.listEggs.push(rowEggs);
        }
    }
    numRows(){
        return this.listEggs.length;
    }
    haveToCreateNewRow(){
        return (this.y>((this.numRows()-1)*ROW_HEIGHT));
    }
    createNewRow(){
        let row = this.listEggs.length;
        let rowEggs = [];
        let l;
            if(row%2==0) {
                l =10;
            }else l = 9;
        for(let col = 0; col <l; col++){
            let newEgg = new egg(this.game, row, col);
            rowEggs.push(newEgg);
        }
        this.listEggs.push(rowEggs)
    }
    update(){
        this.y += 1;
        if(this.haveToCreateNewRow()){
            this.createNewRow();
        }

        this.listEggs.forEach((line) =>{
            line.forEach((egg)=>{
                egg.update();
            });
        });
    }

    draw(){
        this.listEggs.forEach((line) =>{
            line.forEach((egg)=>{
                egg.draw();
            });
        });
    }
}