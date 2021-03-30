const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,height,1600,20);
    box1 = new Box(850, 200, 50, 50);
    box2 = new Box(910, 150, 50, 50);
    box3 = new Box(850, 225, 50, 50);
    box4 = new Box(880, 225, 50, 50);
    box5 = new Box(910, 225, 50, 50);
    box6 = new Box(940, 225, 50, 50);
    box7 = new Box(970, 225, 50, 50);
    box8 = new Box(1000, 225, 50, 50);
    box9 = new Box(970, 200, 50, 50);

    box10 = new Box(880, 175, 50, 50);
    box11 = new Box(910, 175, 50, 50);
    box12 = new Box(940, 175, 50, 50);
    box13 = new Box(940, 200, 50, 50);
    box14 = new Box(910, 200, 50, 50);
    box15 = new Box(880, 200, 50, 50);
    bird = new Bird(100, 100);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("violet");
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
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
    slingshot.display();  
    text(mouseX + "," + mouseY, 50,50);  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body, {x:200, y:50});
        Matter.Body.setPosition(box1.body, {x:850 , y:200});
        Matter.Body.setPosition(box2.body, {x:910 , y:150});
        Matter.Body.setPosition(box3.body, {x:850 , y:225});
        Matter.Body.setPosition(box4.body, {x:880 , y:225});
        Matter.Body.setPosition(box5.body, {x:910 , y:225});
        Matter.Body.setPosition(box6.body, {x:940 , y:225});
        Matter.Body.setPosition(box7.body, {x:970 , y:225});
        Matter.Body.setPosition(box8.body, {x:1000 , y:225});
        Matter.Body.setPosition(box9.body, {x:970 , y:200});
        Matter.Body.setPosition(box10.body, {x:880 , y:175});
        Matter.Body.setPosition(box11.body, {x:910 , y:175});
        Matter.Body.setPosition(box12.body, {x:940 , y:175});
        Matter.Body.setPosition(box13.body, {x:910 , y:200});
        Matter.Body.setPosition(box14.body, {x:940 , y:200});
        Matter.Body.setPosition(box15.body, {x:880 , y:200});
    }
}

function mouseReleased(){
    slingshot.fly();
}