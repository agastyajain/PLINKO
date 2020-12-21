const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var g1,g2,g3,g4,g5,g6,g7;
var g,gg,ggg;
var ball;


function setup() {
  createCanvas(480, 565);
  engine = Engine.create();
  world = engine.world;

 
  g1=new Div(240,560,480,20);
  g=new Div(240,0,480,10);
  gg=new Div(0,283,10,565);
  g2=new Div(90,450,10,220);
  g3=new Div(180,450,10,220);
  g4=new Div(270,450,10,220);
  g5=new Div(360,450,10,220);
  g6=new Div(450,450,10,220);
  ball=new Ball(225,30,10);
  
 
}

function draw() {
  background(0);
  Engine.update(engine);

  g1.display();
  g.display();
  gg.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  ball.display();

  for (i=20;i<480;i=i+40){
    var plinko = new Plinko(i,50,5);
    plinko.display();
  }

  for (i=10;i<480;i=i+40){
    var plinko1 = new Plinko(i,150,5);
    plinko1.display();
  }

  for (i=20;i<480;i=i+40){
    var plinko2 = new Plinko(i,250,5);
    plinko2.display();
  }

  
 
}

