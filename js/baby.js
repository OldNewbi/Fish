var babyObject=function(){
    this.x;
    this.y;
    this.angle;
    //this.beye=new Image();
    //this.bbody=new Image();
    //this.btail=new Image();
    this.tailCount;
    this.tailTime;
    this.eyesCount;
    this.eyesTime;
    this.eyesInter;
    this.babyBodyTime;
    this.babyBodyCount;
}
babyObject.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.5+50;
    this.angle=0;
    this.tailCount=0;
    this.tailTime=0;
    this.eyesCount=0
    this.eyesTime=0;
    this.eyesInter=1000;
    this.babyBodyTime=0;
    this.babyBodyCount=0;
    //this.beye.src="./src/babyEye0.png";
    //this.bbody.src="./src/babyFade0.png";
    //this.btail.src="./src/babyTail0.png";
}
babyObject.prototype.draw=function(){
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);
    var deltaX=mom.x-this.x;
    var deltaY=mom.y-this.y;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.6);

    this.tailTime+=deltaTime;
    if(this.tailTime>50){
        this.tailCount=(this.tailCount+1)%8;
        this.tailTime%=50;
    }
    this.eyesTime+=deltaTime;
    if(this.eyesTime>this.eyesInter){
        this.eyesCount=(this.eyesCount+1)%2;
        this.eyesTime%=this.eyesInter;
        if(this.eyesCount==0){
            this.eyesInter=Math.random()*1500+2000;
        }else{
            this.eyesInter=200;
        }
    }
    this.babyBodyTime+=deltaTime;
    if(this.babyBodyTime>300){
        this.babyBodyCount=this.babyBodyCount+1;
        this.babyBodyTime%=300;
        if(this.babyBodyCount>19){
            this.babyBodyCount=19;
            //game over;
            data.gameover=true;
        }
    }
    //console.log(this.tailCount);
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(babytail[this.tailCount],-babytail[this.tailCount].width*0.5+25,-babytail[this.tailCount].height*0.5);
    var babyBody=babybody[this.babyBodyCount];
    ctx1.drawImage(babyBody,-babyBody.width*0.5,-babyBody.height*0.5);
    ctx1.drawImage(babyeyes[this.eyesCount],-babyeyes[this.eyesCount].width*0.5,-babyeyes[this.eyesCount].height*0.5);
    ctx1.restore();
}