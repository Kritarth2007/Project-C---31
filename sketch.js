const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;
var plinkos = []
var particles = []
var division = []
var divisionHeight =300

function setup() {
  createCanvas(800, 800);
   

	engine = Engine.create();
  world = engine.world;
  
  ground = new GroundClass(400,800,800,20)
  for (var k = 0; k<=width; k = k + 80) {
    division.push(new DivisionClass(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75))
  }
  for (var j = 20; j <=width; j=j+50){
    plinkos.push(new Plinko(j,175))
    }
    for (var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275))
      }
      for (var j = 20; j <=width; j=j+50){
        plinkos.push(new Plinko(j,375))
        }
}

function draw() {
  background(255,255,255); 
  Engine.update (engine)
  ground.display ()
  for (var i = 0; i < plinkos.length; i++)
   { plinkos[i].display(); } 
   if(frameCount%60===0)
   { particles.push(new Particle(random(width/2-30, width/2+30), 10,10))
     
  } 
  for (var j = 0; j < particles.length; j++) 
     { particles[j].display();
     }
      for (var k = 0; k < division.length; k++)
       { division[k].display(); }
  drawSprites();
}