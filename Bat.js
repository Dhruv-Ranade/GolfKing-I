class Bat{
    constructor(x,y,width,height){
        var options= {
            friction:0.2,
            density :1.0,
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
display(){
 var pos = this.body.position;
 translate(pos.x,pos.y);
rectMode(CENTER);
fill("pink");
rect(0,0,this.width,this.height);

}
}