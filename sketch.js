
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,200,20);
	bob1 = new Bob(340,400,15);
	bob2 = new Bob(370,400,15);
	bob3 = new Bob(400,400,15);
	bob4 = new Bob(430,400,15);
	bob5 = new Bob(460,400,15);;
	rope1  = new Chain(bob1.body,roof.body,-60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	rope1.display();

  
 
}



