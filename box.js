class Box {
    constructor(x,y,width,height){
        var box_options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        stroke("red");
        fill(255);
        rect(pos.x,pos.y,this.width,this.height); 
    }
}