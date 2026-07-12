/*variable*/
eyeWidth=50;
eyeHeight=40;
pupilWidth=22;
pupilHeight=25;
toggle=true;
blue=0;
red=0;
green=0;
let sound;
function preload() {
    sound = loadSound("audio.mp3");
}

/*Setup Runs Once*/
function setup(){
    //sets the screen size
    createCanvas(400,400);
    //sets random values for colors
    red=random(0,255);
    green=random(0,255);
    blue=random(0,255);
}

/*draw loop repeats*/
function draw(){
    angleMode(degrees);
    rectMode(CENTER);
    //background
    if (toggle==false){
        background(204,204,255);
    }
    else{
        background(230, 230, 255);
    }

    //Face
    stroke(0);
    strokeWeight(5);
    fill(253,242,230);
    ellipse(width/2,height/2,175,200);
    //Eyes
    if(toggle==true){
        //Eyes closed
        fill(0);
        ellipse(170,170,eyeWidth,eyeHeight/8);
        ellipse(230,170,eyeWidth,eyeHeight/8);
    }
    else if(toggle==false){
        //Eyes open,pupils open
        fill(157,32,1);
        ellipse(170,170,eyeWidth,eyeHeight);
        ellipse(230,170,eyeWidth,eyeHeight);
        fill(0);
        ellipse(170,170,pupilWidth,pupilHeight);
        ellipse(230,170,pupilWidth,pupilHeight);
        // cheek
        cheek();
    }
    //nose
    stroke(0);
    strokeWeight(3);
    fill(255, 204, 153);
    triangle(200,190,180,220,220,220);
    //Mouth
    if (toggle==true){
        noFill();
        arc(200,230,100,50,0,180);
    }
    else if (toggle==false){
    fill(243, 43, 83);
    arc(200,230,100,50,0,180);
    sound.play();
    }
    // Hair
    fill(77,0,0);
    stroke(77, 0, 0);
    strokeWeight(6);
    arc(200, 130, 170, 70, 180, 360);


    //Text
    noStroke()
    fill(red,green,blue)
    textSize(15);
    text("Even a soul submerged in sleep \n is hard at work and\n helps make something of the world.\n---Heraclitus",10,20);
    //direction for mouse press
    textSize(8);
    text("Click to see me close my eyes.\nClick again to see me open them.",250,350);

}

/*function*/
function mousePressed() {
    toggle = !toggle;

    if (!toggle) {
        sound.play();
    }
    else{
        sound.stop();
        sound.currentTime=0;
    }
}
function cheek(){
  fill(255,230,242);
  ellipse(150,210,30,20);
  ellipse(250,210,30,20);
}
