// Background
var Background;

// boundary
var boundary1, boundary2, boundary3, boundary4;

// fighter plane and bullet
var fighterPlane1, fighterPlane2, fighterPlane3;
var bullet;

// alien, asteroid, monster
var alien1, alien2, monster;
var asteroid_1, asteroid_2, asteroid_3, asteroid_4;

// health and powerup
var health1, health2, health3;
var powerUp1, powerUp2, powerUp3;

// sound, level, game over, restart, select, instructions, back, home, play
var soundOff, soundOn;
var back;
var easyLevel, mediumLevel, hardLevel;
var gameOver, restart;
var select1, select2, select3;
var instructions, back, home, start

// gameState, serve, play, instruction,selectPlane, easy, hard, medium, end;  
var gameState;
var serve
var play, instruction;
var selectLevel, selectPlane1, selectPlane2, selectPlane3;
var easy, medium, hard;
var end;

// equalizing
var gameState = "serve";
var time = 300;
var powerUpTime = 10
var health = 3;
var score = 0;

// images
// background
var backgroundImg, bgStart, bgSelect;

// fighter plane, bullet, health, powerup
var fighterPlane1Img, fighterPlane2Img, fighterPlane3Img;
var healthImg;
var bulletImg;
var increaseDamageImg, SlowDownImg, speedUpImg;

// alien monster asteroid
var alien1Img, alien2Img, monstersImg;
var asteroid1Img, asteroid2Img, asteroid3Img, asteroid4Img;

// sound, level, game over, restart, select, instructions, back, home, play
var soundOffImg, soundOnImg
var easyLevelImg, mediumLevelImg, hardLevelImg;
var gameOverImg, restartImg;
var selectImg;
var instructionsImg, backImg, homeImg, playImg;

// grouping
// monster bullet plane level
var monsterGroup, bulletGroup;
var fighterPlaneGroup, levelGroup, healthGroup;
var soundGroup, startGroup;

// alien, asteroid, powerup
var alienGroup, alienGroup1, alienGroup2;
var asteroidGroup, asteroidGroup1, asteroidGroup2, asteroidGroup3, asteroidGroup4;
var powerUpGroup, powerUpGroup1, powerUpGroup2, powerUpGroup3;

function preload() {
    alien1Img = loadAnimation("images/aliens/alien_1.png", "images/aliens/alien_2.png", "images/aliens/alien_2.png",
        "images/aliens/alien_4.png");
    alien2Img = loadAnimation("images/aliens/alien_5.png", "images/aliens/alien_6.png", "images/aliens/alien_7.png",
        "images/aliens/alien_8.png");

    monstersImg = loadAnimation("images/monster/monster_1.png", "images/monster/monster_2.png",
        "images/monster/monster_3.png", "images/monster/monster_4.png");

    asteroid1Img = loadImage("images/asteroids/asteroid_1.png");
    asteroid2Img = loadImage("images/asteroids/asteroid_2.png");
    asteroid3Img = loadImage("images/asteroids/asteroid_3.png");
    asteroid4Img = loadImage("images/asteroids/asteroid_4.png");

    increaseDamageImg = loadImage("images/power ups/increase damage.png");
    slowDownImg = loadImage("images/power ups/slow down.png");
    speedUpImg = loadImage("images/power ups/speed up.png");

    backgroundImg = loadImage("images/images/Safety_Security_pillars.jpg");

    healthImg = loadImage("images/images/life.png");

    bulletImg = loadImage("images/images/bullet.png");

    fighterPlane1Img = loadImage("images/air craft/1sy.png");
    fighterPlane2Img = loadImage("images/air craft/2sy.png");
    fighterPlane3Img = loadImage("images/air craft/3sy.png"); // background
    backgroundImg = loadImage("images/images/Safety_Security_pillars.jpg");
    bgStart = loadImage("images/Background/bg1.jpg");
    bgSelect = loadImage("images/Background/bg2.jpg");

    // health
    healthImg = loadImage("images/images/life.png");

    // fighterPlane
    fighterPlane1Img = loadImage("images/air craft/1sy.png");
    fighterPlane2Img = loadImage("images/air craft/2sy.png");
    fighterPlane3Img = loadImage("images/air craft/3sy.png");

    // bullet
    bulletImg = loadImage("images/images/bullet.png");

    // alien
    alien1Img = loadAnimation("images/aliens/alien_1.png", "images/aliens/alien_2.png", "images/aliens/alien_2.png",
        "images/aliens/alien_4.png");
    alien2Img = loadAnimation("images/aliens/alien_5.png", "images/aliens/alien_6.png", "images/aliens/alien_7.png",
        "images/aliens/alien_8.png");

    // monster
    monstersImg = loadAnimation("images/monster/monster_1.png", "images/monster/monster_2.png",
        "images/monster/monster_3.png", "images/monster/monster_4.png");

    //asteroid
    asteroid1Img = loadImage("images/asteroids/asteroid_1.png");
    asteroid2Img = loadImage("images/asteroids/asteroid_2.png");
    asteroid3Img = loadImage("images/asteroids/asteroid_3.png");
    asteroid4Img = loadImage("images/asteroids/asteroid_4.png");

    // power up
    increaseDamageImg = loadImage("images/power ups/increase damage.png");
    slowDownImg = loadImage("images/power ups/slow down.png");
    speedUpImg = loadImage("images/power ups/speed up.png");

    // home
    homeImg = loadImage("images/icons/Home Button.png");
    backImg = loadImage("images/icons/Back Button.png");

    // play, instruction
    playImg = loadImage("images/icons/Play Button.png");
    instructionsImg = loadImage("images/icons/Instruction Button.png");

    // restart, gameover, select
    restartImg = loadImage("images/icons/Restart Button.png");
    gameOverImg = loadImage("images/icons/Game Over icon.png");
    selectImg = loadImage("images/icons/Select Button.png");

    // sound
    soundOffImg = loadImage("images/icons/SoundOff Button.png");
    soundOnImg = loadImage("images/icons/SoundOn Button.png");

    // easy, medium, hard
    easyLevelImg = loadImage("images/icons/Easy Button.png");
    mediumLevelImg = loadImage("images/icons/Medium button.png");
    hardLevelImg = loadImage("images/icons/Hard Button.png");
}

function setup() {
    createCanvas(1366, 657);

    /*// boundaries
    boundary1 = createSprite(0, height / 2, 20, height);
    boundary1.visible = true;
    boundary2 = createSprite(width / 4, height / 2, 20, height);
    boundary2.visible = false;
    boundary3 = createSprite(width / 2, 0, width, 20);
    boundary3.visible = false;
    boundary4 = createSprite(width / 2, height, width, 20);
    boundary4.visible = false;



    //health
    health1 = createSprite(100, 35, 10, 10);
    health1.addImage("health1", healthImg);
    health1.scale = 0.5;
    health2 = createSprite(140, 35, 10, 10);
    health2.addImage("health2", healthImg);
    health2.scale = 0.5;
    health3 = createSprite(180, 35, 10, 10);
    health3.addImage("healt3", healthImg);
    health3.scale = 0.5;
*/

    //  group formation
    monsterGroup = new Group();
    bulletGroup = new Group();

    levelGroup = new Group();
    fighterPlaneGroup = new Group();
    healthGroup = new Group();
    soundGroup = new Group();
    startGroup = new Group();

    alienGroup = new Group();
    alienGroup1 = new Group();
    alienGroup2 = new Group();

    asteroidGroup = new Group();
    asteroidGroup1 = new Group();
    asteroidGroup2 = new Group();
    asteroidGroup3 = new Group();
    asteroidGroup4 = new Group();

    powerUpGroup = new Group();
    powerUpGroup1 = new Group();
    powerUpGroup2 = new Group();
    powerUpGroup3 = new Group();
}

function draw() {

    background("cyan");
    drawSprites();
    console.log(gameState);


    // serve
    if (gameState === "serve") {

        // background
        Background = createSprite(width / 2, height / 2, width, height);
        Background.addImage(bgStart);
        Background.scale = 1;

        createStart();
        createSound();

        // mouse pressed
        if (mousePressedOver(start)) {
            gameState = "selectLevel";
        }

        if (mousePressedOver(instructions)) {
            gameState = "instruction"
        }

    } else {
        startGroup.destroyEach();
    }


    // instruction
    if (gameState === "instruction") {

        background("orange");
        textSize(200);
        text("instruction", 200, 200);
    }


    // select level
    if (gameState === "selectLevel") {

        // background
        Background.addImage(bgSelect);
        Background.scale = 1;

        createLevel();

        // mouse pressed
        if (mousePressedOver(easyLevel)) {
            gameState = "selectPlane1";
        }
        if (mousePressedOver(mediumLevel)) {
            gameState = "selectPlane2";
        }
        if (mousePressedOver(hardLevel)) {
            gameState = "selectPlane3";
        }
    } else {
        levelGroup.destroyEach();
    }

    // select plane 1
    if (gameState === "selectPlane1") {
        createPlane();
        createHealth();
    }


    // select plane 2
    if (gameState === "selectPlane2") {
        createPlane();
        createHealth();
    }


    // select plane 3
    if (gameState === "selectPlane3") {
        createPlane();
        createHealth();
    }


    /*
    if (monsterGroup.isTouching(bulletGroup)) {
        monsterGroup.destroyEach();
        bulletGroup.destroyEach();
        score = score + 35;
    }

    if (alienGroup1.isTouching(bulletGroup)) {
        alienGroup1.destroyEach();
        bulletGroup.destroyEach();
        score = score + 25;
    }

    if (alienGroup2.isTouching(bulletGroup)) {
        alienGroup2.destroyEach();
        bulletGroup.destroyEach();
        score = score + 45;
    }

    if (asteroidGroup1.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup1.destroyEach();
        score = score + 60;
    }

    if (asteroidGroup2.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup2.destroyEach();
        score = score + 30;
    }

    if (asteroidGroup3.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup3.destroyEach();
        score = score + 20;
    }

    if (asteroidGroup4.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup4.destroyEach();
        score = score + 10;
    }


    Background.velocityX = -(6);
    if (Background.x < 250) {
        Background.x = Background.width / 4;
    }

    if (keyDown("up")) {
        fighterPlane1.y = fighterPlane1.y - 10;
    }

    if (keyDown("down")) {
        fighterPlane1.y = fighterPlane1.y + 10;
    }

    if (keyDown("left")) {
        fighterPlane1.x = fighterPlane1.x - 10;
    }

    if (keyDown("right")) {
        fighterPlane1.x = fighterPlane1.x + 10;
    }

    if (keyWentDown("space")) {
        createBullet();
    }

    if (monsterGroup.isTouching(bulletGroup)) {
        monsterGroup.destroyEach();
        bulletGroup.destroyEach();
    }

    if (alienGroup1.isTouching(bulletGroup)) {
        alienGroup1.destroyEach();
        bulletGroup.destroyEach();
    }

    if (alienGroup2.isTouching(bulletGroup)) {
        alienGroup2.destroyEach();
        bulletGroup.destroyEach();
    }

    if (asteroidGroup1.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup1.destroyEach();
    }

    if (asteroidGroup2.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup2.destroyEach();
    }

    if (asteroidGroup3.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup3.destroyEach();
    }

    if (asteroidGroup4.isTouching(bulletGroup)) {
        bulletGroup.destroyEach()
        asteroidGroup4.destroyEach();
    }

    if (monsterGroup.isTouching(boundary1) ||
        alienGroup.isTouching(boundary1) ||
        asteroidGroup.isTouching(boundary1)) {
        if (health === 3) {
            health3.visible = false;
            health = 2;
            monsterGroup.destroyEach();
            alienGroup.destroyEach();
            asteroidGroup.destroyEach();
        }
    }

    if (monsterGroup.isTouching(boundary1) ||
        alienGroup.isTouching(boundary1) ||
        asteroidGroup.isTouching(boundary1)) {
        if (health === 2) {
            health1.visible = false;
            health = 1;
            monsterGroup.destroyEach();
            alienGroup.destroyEach();
            asteroidGroup.destroyEach();
        }
    }

    if (monsterGroup.isTouching(boundary1) ||
        alienGroup.isTouching(boundary1) ||
        asteroidGroup.isTouching(boundary1)) {
        if (health === 1) {
            health2.visible = false;
            health = 0;
            monsterGroup.destroyEach();
            alienGroup.destroyEach();
            asteroidGroup.destroyEach();
        }
    }

    console.log(health);

    fighterPlane1.collide(boundary1);
    fighterPlane1.collide(boundary2);
    fighterPlane1.collide(boundary3);
    fighterPlane1.collide(boundary4);

    spawnMonster();

    spawnAlien1();
    spawnAlien2();
    //if (frameCount % 150 === 0) {
    spawnAsteroid1();
    spawnAsteroid2();
    spawnAsteroid3();
    spawnAsteroid4();
    //}
    spawnPowerUp1();
    spawnPowerUp2();
    spawnPowerUp3();

    drawSprites();

    if (frameCount % 30 === 0) {
        time = time - 1;
    }
    textSize(50);
    textFont("Arial");
    fill(rgb(255, 229, 150));
    text("Time Left  :  " + time, 1000, 50);
    text("Score  :  " + score, 500, 50) *
        */

}



function createStart() {
    // instructrion start
    start = createSprite(683, 450);
    start.addImage(playImg);
    start.scale = 1;

    instructions = createSprite(683, 575);
    instructions.addImage(instructionsImg);
    instructions.scale = 0.9;

    startGroup.add(start);
    startGroup.add(instructions);
}

function createSound() {
    // sound
    soundOn = createSprite(1300, 40, 10, 10);
    soundOn.addImage(soundOnImg);
    soundOn.scale = 0.25;

    soundOff = createSprite(1230, 40, 10, 10);
    soundOff.addImage(soundOffImg);
    soundOff.scale = 0.25;
    soundGroup.add(soundOn);
    soundGroup.add(soundOff);
}

function createHealth() {
    //health
    health1 = createSprite(100, 35, 10, 10);
    health1.addImage("health1", healthImg);
    health1.scale = 0.5;

    health2 = createSprite(140, 35, 10, 10);
    health2.addImage("health2", healthImg);
    health2.scale = 0.5;

    health3 = createSprite(180, 35, 10, 10);
    health3.addImage("healt3", healthImg);
    health3.scale = 0.5;

    healthGroup.add(health1);
    healthGroup.add(health2);
    healthGroup.add(health3);
}

function createLevel() {
    // level
    easyLevel = createSprite(366, 250);
    easyLevel.addImage(easyLevelImg);
    easyLevel.scale = 0.5;

    mediumLevel = createSprite(683, 250);
    mediumLevel.addImage(mediumLevelImg);
    mediumLevel.scale = 0.5;

    hardLevel = createSprite(1000, 250);
    hardLevel.addImage(hardLevelImg);
    hardLevel.scale = 0.5;

    levelGroup.add(easyLevel);
    levelGroup.add(mediumLevel);
    levelGroup.add(hardLevel);
}

function createPlane() {
    fighterPlane1 = createSprite(300, 200, 20, 20);
    fighterPlane1.addImage("plane1", fighterPlane1Img);
    fighterPlane1.debug = false;
    fighterPlane1.setCollider("rectangle", 0, 0, fighterPlane1.width - 10, fighterPlane1.height - 20);

    fighterPlane2 = createSprite(300, 300, 20, 20);
    fighterPlane2.addImage("plane2", fighterPlane2Img);
    fighterPlane2.debug = false;
    fighterPlane2.setCollider("rectangle", 5, 0, fighterPlane2.width - 45, fighterPlane2.height - 20);

    fighterPlane3 = createSprite(300, 400, 20, 20);
    fighterPlane3.addImage("plane3", fighterPlane3Img);
    fighterPlane3.debug = false;
    fighterPlane3.setCollider("rectangle", 2, 0, fighterPlane3.width - 22, fighterPlane3.height - 20);

    fighterPlaneGroup.add(fighterPlane1);
    fighterPlaneGroup.add(fighterPlane2);
    fighterPlaneGroup.add(fighterPlane3);
}



function createBullet() {
    bullet = createSprite(400, 300, 20, 20);
    bullet.y = fighterPlane1.y
    bullet.addImage("bullet", bulletImg);
    bullet.scale = 0.0625;
    bullet.debug = false;
    bullet.setCollider("rectangle", -10, 0, bullet.width - 60, bullet.height - 600);

    bullet.velocityX = 25;

    bullet.lifetime = 500;
    bulletGroup.add(bullet);
}

function spawnMonster() {
    // 125 -3
    if (frameCount % 20 === 0) {
        monster = createSprite(1366, 120, 40, 10);
        monster.y = Math.round(random(50, 600));
        monster.addAnimation("monster", monstersImg);
        monster.scale = 0.5;

        monster.debug = false;
        monster.setCollider("rectangle", 0, 0, monster.width - 90, monster.height - 10);

        monster.velocityX = -30;

        monster.lifetime = 500;
        monsterGroup.add(monster);
    }
}

function spawnAlien1() {
    if (frameCount % 100 === 0) {
        alien1 = createSprite(1366, 120, 40, 10);
        alien1.y = Math.round(random(50, 600));
        alien1.velocityX = -3;
        alien1.addAnimation("alien", alien1Img);
        alien1.scale = 0.5;

        alien1.debug = false;
        alien1.setCollider("rectangle", 0, 0, alien1.width, alien1.height);

        alien1.lifetime = 500;
        alienGroup1.add(alien1);
        alienGroup.add(alien1);
    }
}

function spawnAlien2() {
    if (frameCount % 100 === 0) {
        alien2 = createSprite(1366, 120, 40, 10);
        alien2.y = Math.round(random(50, 600));
        alien2.velocityX = -3;
        alien2.addAnimation("alien", alien2Img);
        alien2.scale = 0.5;

        alien2.debug = false;
        alien2.setCollider("rectangle", 0, 0, alien2.width, alien2.height);

        alien2.lifetime = 500;
        alienGroup2.add(alien2);
        alienGroup.add(alien2);
    }
}

function spawnAsteroid1() {
    if (frameCount % 150 === 0) {
        asteroid1 = createSprite(1366, 120, 40, 10);
        asteroid1.y = Math.round(random(50, 600));
        asteroid1.addImage(asteroid1Img);
        asteroid1.scale = 0.25;

        asteroid1.debug = false;
        asteroid1.setCollider("rectangle", 0, 0, asteroid1.width, asteroid1.height);

        asteroid1.velocityX = -3;

        asteroid1.lifetime = 500;
        asteroidGroup1.add(asteroid1);
        asteroidGroup.add(asteroid1)
    }
}

function spawnAsteroid2() {
    if (frameCount % 150 === 0) {
        asteroid2 = createSprite(1366, 120, 40, 10);
        asteroid2.y = Math.round(random(50, 600));
        asteroid2.velocityX = -3;
        asteroid2.addImage(asteroid2Img);

        asteroid2.scale = 0.25;

        asteroid2.debug = false;
        asteroid2.setCollider("rectangle", 0, 0, asteroid2.width, asteroid2.height);

        asteroid2.lifetime = 500
        asteroidGroup2.add(asteroid2);
        asteroidGroup.add(asteroid2);
    }
}

function spawnAsteroid3() {
    if (frameCount % 150 === 0) {
        asteroid3 = createSprite(1366, 120, 40, 10);
        asteroid3.y = Math.round(random(50, 600));
        asteroid3.velocityX = -3;
        asteroid3.addImage(asteroid3Img);
        asteroid3.scale = 0.25;

        asteroid3.debug = false;
        asteroid3.setCollider("rectangle", 0, 0, asteroid3.width, asteroid3.height);

        asteroid3.lifetime = 500
        asteroidGroup3.add(asteroid3);
        asteroidGroup.add(asteroid3);
    }
}

function spawnAsteroid4() {
    if (frameCount % 150 === 0) {
        asteroid4 = createSprite(1366, 120, 40, 10);
        asteroid4.y = Math.round(random(50, 600));
        asteroid4.velocityX = -3;
        asteroid4.addImage(asteroid4Img);
        asteroid4.scale = 0.25;

        asteroid4.debug = false;
        asteroid4.setCollider("rectangle", 0, 0, asteroid4.width, asteroid4.height);

        asteroid4.lifetime = 500
        asteroidGroup4.add(asteroid4);
        asteroidGroup.add(asteroid4);
    }
}

function spawnPowerUp1() {
    if (frameCount % 200 === 0) {

        powerUp1 = createSprite(1366, 350);
        powerUp1.y = Math.round(random(50, 600));
        powerUp1.addAnimation("alien", increaseDamageImg);
        powerUp1.scale = 1;

        powerUp1.debug = false;
        powerUp1.setCollider("rectangle", 0, 5, powerUp1.width, powerUp1.height - 10);

        powerUp1.velocityX = -3;
        powerUp1.lifetime = 500;
        powerUpGroup1.add(powerUp1);
        powerUpGroup.add(powerUp1);
    }
}

function spawnPowerUp2() {
    if (frameCount % 200 === 0) {

        powerUp2 = createSprite(1366, 350);
        powerUp2.y = Math.round(random(50, 600));
        powerUp2.addAnimation("alien", slowDownImg);
        powerUp2.scale = 1;

        powerUp2.debug = false;
        powerUp2.setCollider("rectangle", 0, 5, powerUp1.width, powerUp1.height - 10);

        powerUp2.velocityX = -3;
        powerUp2.lifetime = 500;
        powerUpGroup2.add(powerUp2);
        powerUpGroup.add(powerUp2);
    }
}

function spawnPowerUp3() {
    if (frameCount % 200 === 0) {
        powerUp3 = createSprite(1366, 500);
        powerUp3.y = Math.round(random(50, 600));
        powerUp3.addAnimation("alien", speedUpImg);
        powerUp3.scale = 1;

        powerUp3.debug = false;
        powerUp3.setCollider("rectangle", 0, 5, powerUp3.width, powerUp3.height - 10);

        powerUp3.velocityX = -3;
        powerUp3.lifetime = 500;
        powerUpGroup3.add(powerUp3);
        powerUpGroup3.add(powerUp3);
    }
}