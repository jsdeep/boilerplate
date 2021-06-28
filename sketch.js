const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world,ball,ground,wedge,fan;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 var balloptions={
     restitution:0.95,
     frictionAir:0.01    
 }

 ball=Bodies.circle(100,10,20,balloptions);
 World.add(world,ball);
 ellipseMode(RADIUS);

var groundoptions={
    isStatic:true
} 
ground=Bodies.rectangle(200,390,400,20,groundoptions);
World.add(world,ground);
rectMode(CENTER);

var wedgeoptions={
    isStatic:true
}
wedge=Bodies.rectangle(100,200,100,20,wedgeoptions);
World.add(world,wedge);
}


function draw() 
{background("black");
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle);
  rect(0,0,100,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  
}

