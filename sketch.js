const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,600,1200,20);
   
    box1 = new Box(900,100,100,100);
    box2 = new Box(900,100,100,100);
    

    box3 = new Box(900,100,100,100);
    box4 = new Box(900,100,100,100);
    

    box5 = new Box(900,100,100,100);
    
    box6 = new Box(800,100,100,100);
    box7 = new Box(800,100,100,100);
    

    box8 = new Box(800,100,100,100);
    box9 = new Box(800,100,100,100);
    

    box10 = new Box(800,100,100,100);
   


    ball = new Ball(200,200,50,50)
    rope = new Rope(ball.body,{x:550,y:50})
}

function draw(){
        background("black");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
   

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    rope.display();
    ball.display();
    //log6.display();
    //slingshot.display();    
}




function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
