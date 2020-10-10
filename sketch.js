
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var ropeObject1,ropeObject2,ropeObject3,ropeObject4,ropeObject5;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,400,50);
	bobObject2 = new Bob(250,400,50);
	bobObject3 = new Bob(300,400,50);
	bobObject4 = new Bob(350,400,50);
	bobObject5 = new Bob(400,400,50);

	roofObject = new Roof(300,200,270,30);

	 bob1 = new Roof(200,200,10,10);
	 bob2 = new Roof(250,200,10,10);
	 bob3 = new Roof(300,200,10,10);
	 bob4 = new Roof(350,200,10,10);
     bob5 = new Roof(400,200,10,10);

	ropeObject1 = new Rope(bobObject1.body,bob1.body);
	ropeObject2 = new Rope(bobObject2.body,bob2.body);
	ropeObject3 = new Rope(bobObject3.body,bob3.body);
	ropeObject4 = new Rope(bobObject4.body,bob4.body);
	ropeObject5 = new Rope(bobObject5.body,bob5.body);


	 



	

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
	
 
}
function keyPressed(){

    if(keyCode===DOWN_ARROW){
	
		Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100})


	}


}


