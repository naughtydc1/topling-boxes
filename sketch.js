const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var Ground;
var box1,box2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(200,height,400,20);
  box1 = new box(200,300,50,50);
  box2 = new box(240,100,50,100);

}

function draw() {
  background(0);  
  Engine.update(engine);
  Ground.display();
  box1.display();
  box2.display();
}