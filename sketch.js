
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	 ground = new Ground(400,690,800,20)
	ball = new Ball(150,300,10)
	ground2 = new Ground(770,590,10,180)
	ground3 = new Ground(610,590,10,180)
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.show();
 ball.show();
 ground2.show();
 ground3.show();

 if(keyDown(UP_ARROW)){

horizontalForce();


 }
 
    
  
  drawSprites();
 
}

function horizontalForce(){

	Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.0021,y:-0.005})


}


