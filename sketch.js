const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies;
var engine, world;
 var object;
 var ground;
 function setup() {
 createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

 var object_options={
     restitution: 2 
 } 

 var ground_options={
    isStatic : true 
} 
 ground = Bodies.rectangle(10,390,800,30,ground_options); 
 object = Bodies.circle(200,200,20,object_options);
 World.add(world,ground);
 World.add(world,object);

}


function draw() { 
  background("yellow");
rectMode(CENTER);
ellipseMode(RADIUS);
   Engine.update(engine);
    ellipse(object.position.x,object.position.y,20,20); 
    rect(ground.position.x,ground.position.y,800,30);
   }