
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, rect1, rect2, ground

function preload()
{	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	var ball_options={
	restitution:0.3,airFriction:0.1,	
	}
	var ground_options={
	isStatic:true	
	}
	//Create the Bodies Here.
	
	ground=Bodies.rectangle(0,670,800,10,ground_options)
	World.add(world,ground)
	rect1=Bodies.rectangle(600,570,15,100,ground_options)
	World.add(world,rect1)
	rect2=Bodies.rectangle(700,570,15,100,ground_options)
	World.add(world,rect2)
	ball=Bodies.circle(200,650,25,ball_options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,25)
  rect(ground.position.x,ground.position.y,800,10)
  rect(rect1.position.x,rect1.position.y,15,100)
  rect(rect2.position.x,rect2.position.y,15,100)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Body.applyForce(ball,ball.position,{x:0.1,y:-0.05})
	}
}


