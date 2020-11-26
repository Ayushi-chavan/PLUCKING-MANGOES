
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
 boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1200,20);
    tree=new Tree(590,700);

	boy=createSprite(190,640,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;

	stone=new Stone(140,600,40,40);
	
	
	mango1=new Mango(500,300,20);
	mango2=new Mango(600,300,20);
	mango3=new Mango(650,330,20);
	mango4=new Mango(600,250,20);
	mango5=new Mango(650,250,20);

    launcher=new Launcher(stone.body,{x:140,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 
 launcher.display();
 stone.display();

 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);


 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
	  console.log("hello")
   }

