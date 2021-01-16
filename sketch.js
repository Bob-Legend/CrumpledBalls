var box1Sprite, box2Sprite, box3Sprite;
var box1Body, box2Body, box3Body;
var paper, paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);

	/*box1Sprite = createSprite(600,580,200,20);
	box2Sprite = createSprite(500,540,20,100);
	box3Sprite = createSprite(700,540,20,100);
	box1Sprite.shapeColor = "red";
	box2Sprite.shapeColor = "red";
	box3Sprite.shapeColor = "red";*/


	engine = Engine.create();
	world = engine.world;

	box1Body = Bodies.rectangle(800, 580, 200, 20 , {isStatic:true});
	World.add(world, box1Body);
	box2Body = Bodies.rectangle(700, 540, 20, 100 , {isStatic:true});
	World.add(world, box2Body);
	box3Body = Bodies.rectangle(900, 540, 20, 100 , {isStatic:true});
	World.add(world, box3Body);

/*	paperObject = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, paperObject); */


	paper = new Paper(100,100);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  //paper.x= paperObject.position.x ;
  //paper.y= paperObject.position.y; 

  paper.display();
  ground.display();

  fill("red");
  rect(box1Body.position.x, box1Body.position.y, 200, 20);
  rect(box2Body.position.x, box2Body.position.y, 20, 100);
  rect(box3Body.position.x, box3Body.position.y, 20, 100);


 
}
function keyPressed() {
	
	if (keyCode === UP_ARROW) {
	
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:150, y:-120});
   }
   }
