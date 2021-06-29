
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , dustbin , ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,30);
	dustbin = new Dustbin(550,650);
	paper = new Paper(100,630);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  paper.display();
  dustbin.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:130,y:-170})
	}
}


