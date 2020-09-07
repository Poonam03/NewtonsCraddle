
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(200,200,100,20);
	roof2=new Roof(250,200,100,20);
	roof3=new Roof(300,200,100,20);
	roof4=new Roof(350,200,100,20);
	roof5=new Roof(400,200,100,20);
	
	bob1=new Bob(200,400,20);
	bob2=new Bob(250,400,20);
	bob3=new Bob(300,400,20);
	bob4=new Bob(350,400,20);
	bob5=new Bob(400,400,20);
	rope1=new Rope(bob1.body,roof1.body,-20,0);
	rope2=new Rope(bob2.body,roof2.body,-20,0);
	rope3=new Rope(bob3.body,roof3.body,-20,0);
	rope4=new Rope(bob4.body,roof4.body,-20,0);
	rope5=new Rope(bob5.body,roof5.body,-20,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.setStatic(bob1.body,false);
		Matter.Body.applyForce(bob1.body,{x:bob2.body.position.x,y:bob2.body.position.y},{x:-25,y:25})
		//Matter.Body.translate(bob1.body,{x:-180,y:-100});
		Matter.Body.setStatic(bob2.body,false);
		Matter.Body.setStatic(bob3.body,false);
		Matter.Body.setStatic(bob4.body,false);
		Matter.Body.setStatic(bob5.body,false);
		
	}
}

