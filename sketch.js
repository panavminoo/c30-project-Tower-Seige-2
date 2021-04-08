const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, box, hex1, slingshot
function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create()
world = engine.world;
ground = new Ground (600,300,200,20);
box = new Box(600,270,50,50);
box2 = new Box(550,270,50,50);
box3 = new Box(650,270,50,50);
box4 = new Box(625,220,50,50);
box5 = new Box(575,220,50,50);
box6 = new Box(600,170,50,50);
hex1 = new Hexx(300,200,50,50);
slingshot = new SlingShot(hex1.body,{x:300,y:200});
}

function draw(){
background("black");
Engine.update(engine);
ground.display();
box.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
hex1.display();
slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(hex1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}