const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("bg1.jpg");
}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 650, 1800, 20);

  hero = new Hero(250,800,200);
  rope = new Rope(hero.body, { x:250, y: 200 });
  monster1 = new Monster(1008,280,300);
  monster3 = new Monster3(700,100,100);
  monster2 = new Monster3(1000,600,100);
  

  

  box1 = new Box(1100, 550, 30,150);
  box2 = new Box(900, 550, 30, 150);
  box3 = new Box(1000,500,300,30);
  box6 = new Box(1010,280,300,30);
  box4 = new Box(950,300,30,100);
  box5 = new Box(1050,300,30,100);

  box7=new Box(600,100,70,70);
  box8=new Box(600,100,70,70);
  box9=new Box(600,100,70,70);
  box10=new Box(600,100,70,70);
  box11=new Box(600,100,70,70);
  box12=new Box(600,100,70,70);

  box13=new Box(800,100,70,70);
  box14=new Box(800,100,70,70);
  box15=new Box(800,100,70,70);
  box16=new Box(800,100,70,70);
  box17=new Box(800,100,70,70);
  box18=new Box(800,100,70,70);
  
  
  

 
 

}

function draw() {
  
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  
  hero.display();
  monster1.display();
  monster3.display();
  monster2.display();
  rope.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
