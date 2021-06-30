const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var character1_idle, character1_attack, character1_run, character1_death, character1_jump, character2_idle, character2_attack, character2_run, character2_death, character2_jump;

function preload(){
    character1_idle = loadAnimation("idle0001.png, idle0002.png, idle0003.png, idle0004.png, idle0005.png, idle0006.png, idle0007.png, idle0008.png, idle0009.png, idle0010.png, idle0011.png, idle0012.png, idle0013.png, idle0014.png, idle0015.png, idle0016.png, idle0017.png, idle0018.png ");
    character1_attack = loadAnimation("attack10001.png, attack10002.png, attack10003.png, attack10004.png, attack10005.png, attack10006.png, attack10007.png, attack10008.png, attack10009.png, attack10010.png, attack10011.png, attack10012.png, attack10013.png, attack10014.png, attack10015.png, attack10016.png, attack10017.png, attack10018.png, attack10019.png, attack10020.png, attack10021.png ");
    character1_b_run = loadAnimation("b_run0001.png, b_run0002.png, b_run0003.png, b_run0004.png, b_run0005.png, b_run0006.png, b_run0007.png, b_run0008.png, b_run0009.png, b_run0010.png, b_run0011.png, b_run0012.png, b_run0013.png, b_run0014.png, b_run0015.png, b_run0016.png, b_run0017.png ");
    character1_jump = loadAnimation("jump0001.png, jump0002.png, jump0003.png, jump0004.png, jump0005.png, jump0006.png, jump0007.png, jump0008.png, jump0009.png, jump0010.png, jump0011.png, jump0012.png, jump0013.png, jump0014.png, jump0015.png, jump0016.png, jump0017.png, jump0018.png, jump0019.png, jump0020.png, jump0021.png, jump0022.png, jump0023.png, jump0024.png, jump0025.png, jump0026.png, jump0027.png ");
    character1_death = loadAnimation("death0001.png, death0002.png, death0003.png, death0004.png, death0005.png, death0006.png, death0007.png, death0008.png, death0009.png, death0010.png, death0011.png, death0012.png, death0013.png, death0014.png, death0015.png, death0016.png, death0017.png, death0018.png, death0019.png, death0020.png, death0021.png, death0022.png, death0023.png, death0024.png, death0025.png, death0026.png, death0027.png, death0028.png, death0029.png, death0030.png, death0031.png, death0032.png, death0033.png, death0034.png, death0035.png, death0036.png, death0037.png, death0038.png, death0039.png, death0040.png, death0041.png, death0042.png, death0043.png, death0044.png, death0045.png, death0046.png, death0047.png, death0048.png, death0049.png ");
    character1_run = loadAnimation("run0001.png, run0002.png, run0003.png, run0004.png, run0005.png, run0006.png, run0007.png, run0008.png, run0009.png, run0010.png, run0011.png, run0012.png, run0013.png, run0014.png, run0015.png, run0016.png, run0017.png ");

}

function setup(){
    var canvas = createCanvas(400,400);
    var character1 = createSprite(200,200,20,20);
    character1.addAnimation("idle",character1_idle);
    //character1.addAnimation("attack",character1_attack);
    //character1.addAnimation("b_run",character1_b_run);
    //character1.addAnimation("jump",character1_jump);
    //character1.addAnimation("death",character1_death);
    //character1.addAnimation("run",character1_run);

    engine = Engine.create();
    world = engine.world;

    var character_options ={
        isStatic: true
    }

}

function draw(){
    background(0);
    Engine.update(engine);
    if(keyDown(UP_ARROW)){
        character1.y = character1.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        character1.y = character1.y + 5;
    }

    if(keyDown(LEFT_ARROW)){
        character1.x = character1.x - 5;
    }

    if(keyDown(RIGHT_ARROW)){
        character1.x = character1.x + 5;
    }

    rect(200,390,200,20);

    drawSprites();
}