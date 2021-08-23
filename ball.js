class Ball{

    constructor(x, y, w){

    var option = {isStatic:false,restitution:0.4}   

    this.body = Bodies.circle(x,y,w,option)

    this.w = w;
     World.add(world,this.body);
    }

    show(){

    var pos = this.body.position
    push();
    fill("white")
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,10)
    pop();

    }                               
    
}
    