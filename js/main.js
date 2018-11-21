var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;
var deltaTime;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var data;
var babytail=[];
var babyeyes=[];
var babybody=[];
var momtail=[];
var momeyes=[];
var mombody=[];
var mombodyblue=[];
var wave;
var halo;
var dust;
document.body.onload=game;
function game(){
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init(){
    can1=document.getElementById("can1");
    can2=document.getElementById("can2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    can1.addEventListener('mousemove',onMousemove,false);
    bgPic.src="./src/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;
    ane=new aneObject();
    ane.init();
    fruit=new fruitObject();
    fruit.init();
    mom=new momObject();
    mom.init();
    mx=canWidth*0.5;
    my=canHeight*0.5;
    // console.log("text");
    baby=new babyObject();
    baby.init();
    data=new dataObj();
    ctx1.font="20px Verdana";
    ctx1.textAlign="center";
    for(var i=0;i<8;i++){
        babytail[i]=new Image();
        babytail[i].src="./src/babyTail"+i+".png";
    }
    for(var j=0;j<2;j++){
        babyeyes[j]=new Image();
        babyeyes[j].src="./src/babyEye"+j+".png";
    }
    for(var i=0;i<20;i++){
        babybody[i]=new Image();
        babybody[i].src="./src/babyFade"+i+".png";
    }
    for(var i=0;i<8;i++){
        momtail[i]=new Image();
        momtail[i].src="./src/bigTail"+i+".png";
    }
    for(var i=0;i<2;i++){
        momeyes[i]=new Image();
        momeyes[i].src="./src/bigEye"+i+".png";
    }
    for(var i=0;i<8;i++){
        mombody[i]=new Image();
        mombody[i].src="./src/bigSwim"+i+".png";
        mombodyblue[i]=new Image();
        mombodyblue[i].src="./src/bigSwimBlue"+i+".png";
    }
    wave=new waveObj();
    wave.init();
    halo=new haloObj();
    halo.init();
    dust=new dustObj();
    dust.init();
    //console.log(mombody[0]);
}
function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    if(deltaTime>40) deltaTime=40;
    lastTime=now;
    drawBackground();

    ane.draw();
    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    baby.draw();
    momFruitsCollision();

    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();

}
function onMousemove(e){
    if(!data.gameover) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
    //console.log(my);
}