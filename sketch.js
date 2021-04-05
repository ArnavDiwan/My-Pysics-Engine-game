const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gem1, gem2;
var backgroundImg,platform;
var stone, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

var star1, star2, star3, star4, star5;

function preload() {
    getBackgroundImg();
}

function setup(){
    createCanvas(1400,768);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,400,1400,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(500,320,70,70);
    box2 = new Box(720,320,70,70);
    gem1 = new Gem(610, 350);
    log1 = new Log(610,260,300, PI/2);

    box3 = new Box(500,240,70,70);
    box4 = new Box(720,240,70,70);
    gem2 = new Gem(610, 220);

    log3 =  new Log(610,180,300, PI/2);

    box5 = new Box(610,160,70,70);
    log4 = new Log(560,120,150, PI/7);
    log5 = new Log(670,120,150, -PI/7);
    // egji
    box6 = new Box(900, 320, 70, 70);
    box7 = new Box(1120, 320, 70, 70);
    gem3 = new Gem(1010, 350);
    log6 = new Log(1010, 260, 300, PI/2);

    box8 = new Box(900, 240, 70, 70);
    box9 = new Box(1120, 240, 70, 70);
    gem4 = new Gem(1010, 220);

    log7 = new Log(1010, 180, 300, PI/2);

    box10 = new Box(1010, 160, 70, 70);
    log8 = new Log(960, 120, 150, PI/7);
    log9 = new Log(1070, 120, 150, -PI/7);

    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:50});

   

    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    

        if (score >= 2300000){
            noStroke();
            textSize(100);
            fill("red");
            text("You Win", 700, 384)
        }

        noStroke();
        textSize(35)
        fill("white")
        text("Coins  " + score, width-300, 50)

        noStroke();
        textSize(20);
        fill("white");
        text("Welcome to this game. In this game you are a rich person. There are 4 green coloured super crystles from mars have landed on Earth.", 10, 450);

        noStroke();
        textSize(20);
        fill("white");
        text("If you get the crystles you will be the most powerful and the richest person on Earth. If you want a proof that you are very rich in this game then you will", 10, 480);

        noStroke();
        textSize(20);
        fill("white");
        text("notice that the stone you are using to get the crystles is made of ruby which is expensive. Well now let me tell the value of each thing in this game.", 10, 510);
    
        noStroke();
        textSize(20);
        fill("white");
        text("Rectangular block = 100000 coins", 10, 540)

        noStroke();
        textSize(20);
        fill("white");
        text("Crystle = 400000 coins", 10, 570);

        noStroke();
        textSize(20);
        fill("white");
        text("Square Block = 0 coins (It will never disappear with any speed you hit it with)", 10, 600);

        noStroke();
        textSize(20);
        fill("white");
        text("Max coins you can earn = 2400000 coins", 10, 630);

        noStroke();
        textSize(20);
        fill("white");
        text("To become a winner you need to score atleast 2300000 coins", 10, 660);

        noStroke();
        textSize(20);
        fill("white");
        text("Press space key to put the ruby in the sling shot", 10, 690);

        // noStroke();
        // textSize(20);
        // fill("white");
        // text("1000000 coins = 2 Stars | 2200000 coins = 5 Stars", 10, 720);

        // noStroke();
        // textSize(20);
        // fill("white");
        // text("1300000 coins = 3 Stars", 10, 750);
        
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    gem1.display();
    gem1.score();
    log1.display();
    log1.score1();

    box3.display();
    box4.display();
    gem2.display();
    gem2.score();
    log3.display();
    log3.score1();

    box5.display();
    log4.display();
    log4.score1();
    log5.display();
    log5.score1();
    //uergufy
    box6.display();
    box7.display();
    gem3.display();
    gem3.score();
    log6.display();
    log6.score1();

    box8.display();
    box9.display();
    gem4.display();
    gem4.score();

    log7.display();
    log7.score1();

    box10.display();
    log8.display();
    log8.score1();
    log9.display();
    log9.score1();

    stone.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
      // stone.trajectory = [];
       slingshot.attach(stone.body);
       Matter.Body.setPosition(stone.body, {x: 180 , y: 70});

    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}