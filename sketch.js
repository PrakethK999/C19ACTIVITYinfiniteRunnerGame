var bBSt, bGSt, bOSt, bPSt, bRSt, bYSt;
var bBSn, bGSn, bOSn, bPSn, bRSn, bYSn;

var groundImg, ground, invisibleGround;

var bBlueStanding, bGreenStanding, bOrangeStanding, bPinkStanding, bRedStanding, bYellowStanding;
var bBlueSneaking, bGreenSneaking, bOrangeSneaking, bPinkSneaking, bRedSneaking, bYellowSneaking;
var bBGroup;

var coinImg, coin1, coin2, coin3, coinsGroup1, coinsGroup2, coinsGroup3;

var obstacle, obstacleImg, obstaclesGroup;

var gameState = Serve;
var Serve = 0;
var Play = 1;
var End = 2;
var Win = 2;

var gameOver, gameOverImg;

var start, startImg;

var thumbNail, thumbNailImg;

var newGame, newGameImg;

var Score = 0;

var mouseCount = 0;

var B, bImg, G, gImg, O, oImg, P, pImg, R, rImg, Y, yImg;

var Distance=0;

var Win, winImg;

function preload(){
    bBlueStanding = loadImage("boxBlueStanding.png");
    bGreenStanding = loadImage("boxGreenStanding.png");
    bOrangeStanding = loadImage("boxOrangeStanding.png");
    bPinkStanding = loadImage("boxPinkStanding.png");
    bRedStanding = loadImage("boxRedStanding.png");
    bYellowStanding = loadImage("boxYellowStanding.png"); 

    bBlueSneaking = loadImage("boxBlueSneaking.png");
    bGreenSneaking = loadImage("boxGreenSneaking.png");
    bOrangeSneaking = loadImage("boxOrangeSneaking.png");
    bPinkSneaking = loadImage("boxPinkSneaking.png");
    bRedSneaking = loadImage("boxRedSneaking.png");
    bYellowSneaking = loadImage("boxYellowSneaking.png"); 
    groundImg = loadImage("Picture1.jpg");

    coinImg = loadAnimation("coinPic1.png","coinPic2.png","coinPic3.png","coinPic4.png","coinPic5.png","coinPic6.png");

    obstacleImg = loadImage("obstacles.jpg");

    gameOverImg = loadImage("GameOver.png");
    winImg = loadImage("Win.png");

    thumbNailImg = loadImage("thumbNail.jpg");
    startImg = loadImage("start.jpg");
    newGameImg = loadImage("newgame.jpg");
    
    gImg = loadImage("G.png");
    bImg = loadImage("B.png"); 
    oImg = loadImage("O.png");
    pImg = loadImage("P.png");
    rImg = loadImage("R.png")
    yImg = loadImage("Y.png")
}

function setup() {
 createCanvas(1000,500);

    ground = createSprite(200,500);
    ground.addImage(groundImg);
    ground.x = ground.width /2;

    invisibleGround = createSprite(500, 350, 1000, 20);
    invisibleGround.visible = false;
    //invisibleGround.depth = ground.depth - 1;





    bBSt = createSprite(200,340);
    bBSt.addImage("BSt",bBlueStanding);
    bBSt.scale = 0.5;

    //bBSn = createSprite(bBSt.x,bBSt.y);
    bBSn = createSprite(bBSt.x,bBSt.y);
    bBSn.addImage("BSn",bBlueSneaking);
    bBSn.scale = 0.5;
    bBSn.visible = false;



    bGSt = createSprite(200,340);
    bGSt.addImage("BGt",bGreenStanding);
    bGSt.scale = 0.5;

    //bBSn = createSprite(bBSt.x,bBSt.y);
    bGSn = createSprite(bGSt.x,bGSt.y);
    bGSn.addImage("BGn",bGreenSneaking);
    bGSn.scale = 0.5;
    bGSn.visible = false;



    bOSt = createSprite(200,340);
    bOSt.addImage("BOt",bOrangeStanding);
    bOSt.scale = 0.5;


    bOSn = createSprite(bOSt.x,bOSt.y);
    bOSn.addImage("BOn",bOrangeSneaking);
    bOSn.scale = 0.5;
    bOSn.visible = false;



    bPSt = createSprite(200,340);
    bPSt.addImage("BPt",bPinkStanding);
    bPSt.scale = 0.5;


    bPSn = createSprite(bPSt.x,bPSt.y);
    bPSn.addImage("BPn",bPinkSneaking);
    bPSn.scale = 0.5;
    bPSn.visible = false;



    bRSt = createSprite(200,340);
    bRSt.addImage("BRt",bRedStanding);
    bRSt.scale = 0.5;

    bRSn = createSprite(bRSt.x,bRSt.y);
    bRSn.addImage("BRn",bRedSneaking);
    bRSn.scale = 0.5;
    bRSn.visible = false;



    bYSt = createSprite(200,340);
    bYSt.addImage("BYt",bYellowStanding);
    bYSt.scale = 0.5;

    bYSn = createSprite(bYSt.x,bYSt.y);
    bYSn.addImage("BYn",bYellowSneaking);
    bYSn.scale = 0.5;
    bYSn.visible = false;







    coinsGroup1 = new Group();
    coinsGroup2 = new Group();
    coinsGroup3 = new Group();
    obstaclesGroup = new Group();
    bBGroup = new Group();

    thumbNail = createSprite(500, 250);
    thumbNail.addImage("thumbnail", thumbNailImg);
    thumbNail.scale = 0.5;

    B = createSprite( 200, 50);
    B.addImage("b", bImg);
    B.scale = 0.12;

    G = createSprite( 200, 100);
    G.addImage("g", gImg);
    G.scale = 0.2;

    O = createSprite( 800, 100);
    O.addImage("o", oImg);
    O.scale = 0.12;

    P = createSprite( 800, 50);
    P.addImage("p", pImg);
    P.scale = 0.12;

    R = createSprite( 200, 150);
    R.addImage("R", rImg);
    R.scale = 0.12;

    Y = createSprite( 800, 150);
    Y.addImage("y", yImg);
    Y.scale = 0.12;

    start = createSprite(478, 100);
    start.addImage("START", startImg);
    start.scale = 0.1;


    gameOver = createSprite(500, 250);
    gameOver.scale = 2;
    gameOver.addImage("GameOver", gameOverImg);
    gameOver.visible = false;

    Win = createSprite(500, 410);
    Win.scale = 0.25;
    Win.addImage("win", winImg);
    Win.visible = false;

    bBSt.setCollider("rectangle", 0, 0, bBSt.width, bBSt.height);

    gameState = Serve;


}

function draw() {
    background("#66d9ff");
    if(gameState == Serve){
        ground.visible = false;
        coinsGroup1.visible = false;
        coinsGroup2.visible = false;
        coinsGroup3.visible = false;
        obstaclesGroup.visible = false;


        bBSn.visible = false;
        bBSt.visible = false;

        bGSn.visible = false;
        bGSt.visible = false;

        bOSn.visible = false;
        bOSt.visible = false;

        bPSn.visible = false;
        bPSt.visible = false;

        bRSn.visible = false;
        bRSt.visible = false;

        bYSn.visible = false;
        bYSt.visible = false;



        thumbNail.visible = true;
        start.visible = true;

        G.visible = true;
        B.visible = true;
        O.visible = true;
        P.visible = true;
        R.visible = true;
        Y.visible = true;

        if(keyDown("B")){
        bBSt.visible = true;
        bBSn.visible = true;

        bGSt.visible = false;
        bGSn.visible = false;

            
        bOSn.visible = false;
        bOSt.visible = false;

        bPSn.visible = false;
        bPSt.visible = false;

        bRSn.visible = false;
        bRSt.visible = false;

        bYSn.visible = false;
        bYSt.visible = false;
            mouseCount = 0;

        }

        if(keyDown("G")){
        bBSt.visible = false;
        bBSn.visible = false;

        bGSt.visible = true;
        bGSn.visible = true;

        bOSn.visible = false;
        bOSt.visible = false;

        bPSn.visible = false;
        bPSt.visible = false;

        bRSn.visible = false;
        bRSt.visible = false;

        bYSn.visible = false;
        bYSt.visible = false;

            mouseCount = 1;
        }

        if(keyDown("O")){
            bBSt.visible = false;
            bBSn.visible = false;

            bGSt.visible = false;
            bGSn.visible = false;

            bOSn.visible = true;
            bOSt.visible = false;
    
            bPSn.visible = false;
            bPSt.visible = false;
    
            bRSn.visible = false;
            bRSt.visible = false;
    
            bYSn.visible = false;
            bYSt.visible = false;

            mouseCount = 2;
        }

        if(keyDown("P")){
            bBSt.visible = false;
            bBSn.visible = false;

            bGSt.visible = false;
            bGSn.visible = false;

            bOSn.visible = true;
            bOSt.visible = false;
    
            bPSn.visible = false;
            bPSt.visible = false;
    
            bRSn.visible = false;
            bRSt.visible = false;
    
            bYSn.visible = false;
            bYSt.visible = false;

            mouseCount = 3;
        }

        if(keyDown("R")){
            bBSt.visible = false;
            bBSn.visible = false;

            bGSt.visible = false;
            bGSn.visible = false;

            bOSn.visible = false;
            bOSt.visible = false;
    
            bPSn.visible = false;
            bPSt.visible = false;
    
            bRSn.visible = true;
            bRSt.visible = false;
    
            bYSn.visible = false;
            bYSt.visible = false;

            mouseCount = 4;
        }

        if(keyDown("Y")){
            bBSt.visible = false;
            bBSn.visible = false;

            bGSt.visible = false;
            bGSn.visible = false;

            bOSn.visible = false;
            bOSt.visible = false;
    
            bPSn.visible = false;
            bPSt.visible = false;
    
            bRSn.visible = false;
            bRSt.visible = false;
    
            bYSn.visible = true;
            bYSt.visible = false;

            mouseCount = 5;
        }


    }
            if(mousePressedOver(start)){
            gameState = Play;
            G.visible = false;
            B.visible = false;
            O.visible = false;
            P.visible = false;
            R.visible = false;
            Y.visible = false;


            ground.visible = true;
            coinsGroup1.visible = true;
            coinsGroup2.visible = true;
            coinsGroup3.visible = true;
            obstaclesGroup.visible = true;
            bBSn.visible = false;
            bBSt.visible = true;
 
            start.visible = false;
            thumbNail.visible = false;



            
        }
     if(gameState == Play){

    fill("black");
    stroke("black");
    textSize(20);
    text("Distance: "+ Distance, 15, 30);
        if(frameCount % 4 == 0){
            Distance = Distance+1;
        }
            ground.velocityX = -20;
            bBSt.collide(invisibleGround);
            bBSn.collide(invisibleGround);
            bBSt.velocityY = bBSt.velocityY + 0.9;
            bBSn.velocityY = bBSn.velocityY + 0.9;

            bGSt.collide(invisibleGround);
            bGSn.collide(invisibleGround);
            bGSt.velocityY = bGSt.velocityY + 0.9;
            bGSn.velocityY = bGSn.velocityY + 0.9;

            bOSt.collide(invisibleGround);
            bOSn.collide(invisibleGround);
            bOSt.velocityY = bOSt.velocityY + 0.9;
            bOSn.velocityY = bOSn.velocityY + 0.9;

            bPSt.collide(invisibleGround);
            bPSn.collide(invisibleGround);
            bPSt.velocityY = bPSt.velocityY + 0.9;
            bPSn.velocityY = bPSn.velocityY + 0.9;

            bRSt.collide(invisibleGround);
            bRSn.collide(invisibleGround);
            bRSt.velocityY = bRSt.velocityY + 0.9;
            bRSn.velocityY = bRSn.velocityY + 0.9;

            bYSt.collide(invisibleGround);
            bYSn.collide(invisibleGround);
            bYSt.velocityY = bYSt.velocityY + 0.9;
            bYSn.velocityY = bYSn.velocityY + 0.9;

            

            if (ground.x < 0){
                ground.x = ground.width/2;
            } 









            if(frameCount % 50 === 0){
                obstacle = createSprite(1000, random(180, 290));
                obstacle.lifetime = 300;
                obstacle.velocityX = ground.velocityX;
                obstacle.scale = 0.1;
                obstacle.addImage("obstacles", obstacleImg);
                obstacle.depth = bBSt.depth - 1;
                obstaclesGroup.add(obstacle);
                //obstacle.debug = true;
                obstacle.setCollider("rectangle", 0,5, 10, 5);
                }

            if(frameCount % 50 === 0){
                coin1 = createSprite(obstacle.x + 150, 270);
                coin1.addAnimation("coinM", coinImg);
                coin1.scale = 0.15;
                coin1.velocityX = ground.velocityX;
                coinsGroup1.add(coin1);
                coin1.lifetime = 300;
                //coin1.debug = true;
                console.log("coin1");
                coin1.setCollider("rectangle", 0,5, 10, 5);

                coin2 = createSprite(obstacle.x + 200, 270);
                coin2.addAnimation("coinM", coinImg);
                coin2.scale = 0.15;
                coin2.velocityX = ground.velocityX;
                coinsGroup2.add(coin2);
                coin2.lifetime = 300;
                //coin2.debug = true;
                console.log("coin2");
                coin2.setCollider("rectangle", 0,5, 10, 5);

                coin3 = createSprite(obstacle.x + 250, 270);
                coin3.addAnimation("coinM", coinImg);
                coin3.scale = 0.15;
                coin3.velocityX = ground.velocityX;
                coinsGroup3.add(coin3);
                coin3.lifetime = 300;
                //coin3.debug = true;
                console.log("coin3");
                coin3.setCollider("rectangle", 0,5, 10, 5);     

  
            }       
            
            

            if(mouseCount == 0){
                bGSt.visible = false;
                bGSn.visible = false;
                if(keyDown("space") && bBSt.isTouching(ground) || keyDown("up_arrow") && bBSt.isTouching(ground)){
                    bBSt.velocityY = -17;
                } 
                if(keyDown("down_arrow") && bBSt.isTouching(ground)){
                    bBSt.changeAnimation("BSn", bBlueSneaking);
                    bBSn.visible = true;
                    bBSt.visible = false;
                } 
                else{
                    bBSt.changeAnimation("BSt",bBlueStanding);
                    bBSt.visible = true;
                    bBSn.visible = false;        
                }
                bBSt.isTouching(coinsGroup1, destroyCoin);
                bBSt.isTouching(coinsGroup2, destroyCoin);
                bBSt.isTouching(coinsGroup3, destroyCoin);

                if(obstaclesGroup.isTouching(bBSt) || obstaclesGroup.isTouching(bBSn)){
                    gameState = End;
                    obstacle.visible = false;
                    coin1.visible = false;
                    coin2.visible = false;
                    coin3.visible = false;
                    bBSn.visible = false;
                    bBSt.visible = false;
                    bGSn.visible = false;
                    bGSt.visible = false;
                    ground.visible = false;
                 
                    gameOver.visible = true;
                    bBSt.velocityY = 0;
                    bBSn.velocityY = 0;
                    bGSt.velocityY = 0;
                    bGSn.velocityY = 0;
                    ground.velocityX = 0;
                }
    
                if(obstaclesGroup.isTouching(bBSt) || obstaclesGroup.isTouching(bBSn)){
                    newGame = createSprite(500, 100);
                    newGame.scale = 0.1;
                    newGame.addImage("NewGAME", newGameImg);
                    newGame.visible = true;
                }
            }





            if(mouseCount == 1){
                bBSt.visible = false;
                bBSn.visible = false;
            if(keyDown("space") && bGSt.isTouching(ground) || keyDown("up_arrow") && bGSt.isTouching(ground)){
                bGSt.velocityY = -17;
            } 
            if(keyDown("down_arrow") && bGSt.isTouching(ground)){
                bGSt.changeAnimation("BGn", bGreenSneaking);
                bGSn.visible = true;
                bGSt.visible = false;
            } 
            else{
                bGSt.changeAnimation("BSt",bGreenStanding);
                bGSt.visible = true;
                bGSn.visible = false;        
            }
            bGSt.isTouching(coinsGroup1, destroyCoin);
            bGSt.isTouching(coinsGroup2, destroyCoin);
            bGSt.isTouching(coinsGroup3, destroyCoin);



            if(obstaclesGroup.isTouching(bGSt) || obstaclesGroup.isTouching(bGSn)){
                gameState = End;
                obstacle.visible = false;
                coin1.visible = false;
                coin2.visible = false;
                coin3.visible = false;
                bBSn.visible = false;
                bBSt.visible = false;
                bGSn.visible = false;
                bGSt.visible = false;
                ground.visible = false;
                gameOver.visible = true;
                bBSt.velocityY = 0;
                bBSn.velocityY = 0;
                bGSt.velocityY = 0;
                bGSn.velocityY = 0;
                bOSt.velocityY = 0;
                bOSn.velocityY = 0;
                ground.velocityX = 0;
            }

            if(obstaclesGroup.isTouching(bGSt) || obstaclesGroup.isTouching(bGSn)){
                newGame = createSprite(500, 100);
                newGame.scale = 0.1;
                newGame.addImage("NewGAME", newGameImg);
                newGame.visible = true;
            }
        }


        if(mouseCount == 2){
            bGSt.visible = false;
            bGSn.visible = false;
            bBSt.visible = false;
            bBSn.visible = false;
        if(keyDown("space") && bOSt.isTouching(ground) || keyDown("up_arrow") && bOSt.isTouching(ground)){
            bOSt.velocityY = -17;
        } 
        if(keyDown("down_arrow") && bOSt.isTouching(ground)){
            bOSt.changeAnimation("BOn", bOrangeSneaking);
            bOSn.visible = true;
            bOSt.visible = false;
        } 
        else{
            bOSt.changeAnimation("BOt",bOrangeStanding);
            bOSt.visible = true;
            bOSn.visible = false;        
        }
        bOSt.isTouching(coinsGroup1, destroyCoin);
        bOSt.isTouching(coinsGroup2, destroyCoin);
        bOSt.isTouching(coinsGroup3, destroyCoin);



        if(obstaclesGroup.isTouching(bOSt) || obstaclesGroup.isTouching(bOSn)){
            gameState = End;
            obstacle.visible = false;
            coin1.visible = false;
            coin2.visible = false;
            coin3.visible = false;
            bBSn.visible = false;
            bBSt.visible = false;
            bGSn.visible = false;
            bGSt.visible = false;
            bOSn.visible = false;
            bOSt.visible = false;
            ground.visible = false;
            gameOver.visible = true;
            bBSt.velocityY = 0;
            bBSn.velocityY = 0;
            bGSt.velocityY = 0;
            bGSn.velocityY = 0;
            bOSt.velocityY = 0;
            bOSn.velocityY = 0;
            ground.velocityX = 0;
        }

        if(obstaclesGroup.isTouching(bOSt) || obstaclesGroup.isTouching(bOSn)){
            newGame = createSprite(500, 100);
            newGame.scale = 0.1;
            newGame.addImage("NewGAME", newGameImg);
            newGame.visible = true;
        }
    }



        if(mouseCount == 3){                
            bGSt.visible = false;
            bGSn.visible = false;
            bBSt.visible = false;
            bBSn.visible = false;
            bOSt.visible = false;
            bOSn.visible = false;
            
            if(keyDown("space") && bPSt.isTouching(ground) || keyDown("up_arrow") && bPSt.isTouching(ground)){
                bPSt.velocityY = -17;
            } 
            if(keyDown("down_arrow") && bPSt.isTouching(ground)){
                bPSt.changeAnimation("BPn", bPinkSneaking);
                bPSn.visible = true;
                bPSt.visible = false;
            } 
            else{
                bPSt.changeAnimation("BPt",bPinkStanding);
                bPSt.visible = true;
                bPSn.visible = false;        
            }
            bPSt.isTouching(coinsGroup1, destroyCoin);
            bPSt.isTouching(coinsGroup2, destroyCoin);
            bPSt.isTouching(coinsGroup3, destroyCoin);

            if(obstaclesGroup.isTouching(bPSt) || obstaclesGroup.isTouching(bPSn)){
                gameState = End;
                obstacle.visible = false;
                coin1.visible = false;
                coin2.visible = false;
                coin3.visible = false;
                bBSn.visible = false;
                bBSt.visible = false;
                bGSn.visible = false;
                bGSt.visible = false;
                bOSn.visible = false;
                bOSt.visible = false;
                bPSn.visible = false;
                bPSt.visible = false;
                ground.visible = false;
             
                gameOver.visible = true;
                bBSt.velocityY = 0;
                bBSn.velocityY = 0;
                bGSt.velocityY = 0;
                bGSn.velocityY = 0;
                bOSt.velocityY = 0;
                bOSn.velocityY = 0;
                bPSt.velocityY = 0;
                bPSn.velocityY = 0;
                ground.velocityX = 0;
            }

            if(obstaclesGroup.isTouching(bPSt) || obstaclesGroup.isTouching(bPSn)){
                newGame = createSprite(500, 100);
                newGame.scale = 0.1;
                newGame.addImage("NewGAME", newGameImg);
                newGame.visible = true;
            }
        }

        if(mouseCount == 4){
            bGSt.visible = false;
            bGSn.visible = false;
            bBSt.visible = false;
            bBSn.visible = false;
            bOSt.visible = false;
            bOSn.visible = false;
            bPSt.visible = false;
            bPSn.visible = false;
            if(keyDown("space") && bRSt.isTouching(ground) || keyDown("up_arrow") && bRSt.isTouching(ground)){
                bRSt.velocityY = -17;
            } 
            if(keyDown("down_arrow") && bRSt.isTouching(ground)){
                bRSt.changeAnimation("BRn", bRedSneaking);
                bRSn.visible = true;
                bRSt.visible = false;
            } 
            else{
                bRSt.changeAnimation("BRt",bRedStanding);
                bRSt.visible = true;
                bRSn.visible = false;        
            }
            bRSt.isTouching(coinsGroup1, destroyCoin);
            bRSt.isTouching(coinsGroup2, destroyCoin);
            bRSt.isTouching(coinsGroup3, destroyCoin);

            if(obstaclesGroup.isTouching(bRSt) || obstaclesGroup.isTouching(bRSn)){
                gameState = End;
                obstacle.visible = false;
                coin1.visible = false;
                coin2.visible = false;
                coin3.visible = false;
                bBSn.visible = false;
                bBSt.visible = false;
                bGSn.visible = false;
                bGSt.visible = false;
                bOSn.visible = false;
                bOSt.visible = false;
                bPSn.visible = false;
                bPSt.visible = false;
                bRSn.visible = false;
                bRSt.visible = false;
                ground.visible = false;
             
                gameOver.visible = true;
                bBSt.velocityY = 0;
                bBSn.velocityY = 0;
                bGSt.velocityY = 0;
                bGSn.velocityY = 0;
                bOSt.velocityY = 0;
                bOSn.velocityY = 0;
                bPSt.velocityY = 0;
                bPSn.velocityY = 0;
                bRSt.velocityY = 0;
                bRSn.velocityY = 0;
                ground.velocityX = 0;
            }

            if(obstaclesGroup.isTouching(bRSt) || obstaclesGroup.isTouching(bRSn)){
                newGame = createSprite(500, 100);
                newGame.scale = 0.1;
                newGame.addImage("NewGAME", newGameImg);
                newGame.visible = true;
            }
        }

        if(mouseCount == 5){
            bGSt.visible = false;
            bGSn.visible = false;
            bBSt.visible = false;
            bBSn.visible = false;
            bOSt.visible = false;
            bOSn.visible = false;
            bPSt.visible = false;
            bPSn.visible = false;
            bRSt.visible = false;
            bRSn.visible = false;
            if(keyDown("space") && bYSt.isTouching(ground) || keyDown("up_arrow") && bYSt.isTouching(ground)){
                bYSt.velocityY = -17;
            } 
            if(keyDown("down_arrow") && bYSt.isTouching(ground)){
                bYSt.changeAnimation("BYn", bYellowSneaking);
                bYSn.visible = true;
                bYSt.visible = false;
            } 
            else{
                bYSt.changeAnimation("BYt",bYellowStanding);
                bYSt.visible = true;
                bYSn.visible = false;        
            }
            bYSt.isTouching(coinsGroup1, destroyCoin);
            bYSt.isTouching(coinsGroup2, destroyCoin);
            bYSt.isTouching(coinsGroup3, destroyCoin);

            if(obstaclesGroup.isTouching(bYSt) || obstaclesGroup.isTouching(bYSn)){
                gameState = End;
                obstacle.visible = false;
                coin1.visible = false;
                coin2.visible = false;
                coin3.visible = false;
                bBSn.visible = false;
                bBSt.visible = false;
                bGSn.visible = false;
                bGSt.visible = false;
                bOSn.visible = false;
                bOSt.visible = false;
                bPSn.visible = false;
                bPSt.visible = false;
                bRSn.visible = false;
                bRSt.visible = false;
                bYSn.visible = false;
                bYSt.visible = false;
                ground.visible = false;
             
                gameOver.visible = true;
                bBSt.velocityY = 0;
                bBSn.velocityY = 0;
                bGSt.velocityY = 0;
                bGSn.velocityY = 0;
                bOSt.velocityY = 0;
                bOSn.velocityY = 0;
                bPSt.velocityY = 0;
                bPSn.velocityY = 0;
                bRSt.velocityY = 0;
                bRSn.velocityY = 0;
                bYSt.velocityY = 0;
                bYSn.velocityY = 0;
                ground.velocityX = 0;
            }

            if(obstaclesGroup.isTouching(bYSt) || obstaclesGroup.isTouching(bYSn)){
                newGame = createSprite(500, 100);
                newGame.scale = 0.1;
                newGame.addImage("NewGAME", newGameImg);
                newGame.visible = true;
            }
        }


                



        }        

        if(mousePressedOver(newGame)){
            reset();
        }

    fill("black");
    stroke("black");
    textSize(20);
    text("Score: "+ Score, 915, 30);

    if(Score == 100){
        newGame = createSprite(500, 100);
        newGame.scale = 0.1;
        newGame.addImage("NewGAME", newGameImg);
        newGame.visible = true;
        Win.visible = true;
        gameState = Win;
        obstacle.visible = false;
        coin1.visible = false;
        coin2.visible = false;
        coin3.visible = false;
        bBSn.visible = false;
        bBSt.visible = false;
        bGSn.visible = false;
        bGSt.visible = false;
        bOSn.visible = false;
        bOSt.visible = false;
        bPSn.visible = false;
        bPSt.visible = false;
        bRSn.visible = false;
        bRSt.visible = false;
        bYSn.visible = false;
        bYSt.visible = false;
        ground.visible = false;
     
        gameOver.visible = true;
        bBSt.velocityY = 0;
        bBSn.velocityY = 0;
        bGSt.velocityY = 0;
        bGSn.velocityY = 0;
        bOSt.velocityY = 0;
        bOSn.velocityY = 0;
        bPSt.velocityY = 0;
        bPSn.velocityY = 0;
        bRSt.velocityY = 0;
        bRSn.velocityY = 0;
        bYSt.velocityY = 0;
        bYSn.velocityY = 0;
        ground.velocityX = 0;


        coinsGroup1.destroyEach();
        coinsGroup2.destroyEach();
        coinsGroup3.destroyEach();
        obstaclesGroup.destroyEach();
        Distance = 0;
        Score = 0;

        
    
    }
    drawSprites();
}

function destroyCoin(player, coin){
    coin.destroy();    
    Score = Score + 1;
}

function reset(){
    gameState = Play;
    coinsGroup1.destroyEach();
    coinsGroup2.destroyEach();
    coinsGroup3.destroyEach();
    obstaclesGroup.destroyEach();
    newGame.visible = false;
    gameOver.visible = false;
    obstacle.visible = true;
    coin1.visible = true;
    coin2.visible = true;
    coin3.visible = true;
    Win.visible = false;

    Distance = 0;

    bBSn.visible = false;
    bBSt.visible = true;

    bGSn.visible = false;
    bGSt.visible = true;



    ground.visible = true;
    Score= 0;
}