var momObject=function(){
    this.x;
    this.y;
    this.angle;
    this.momTailTime=0;
    this.momTailCount=0;
    this.momEyesTime=0;
    this.momEyesCount=0;
    this.momEyesInterval=1000;
    //this.momBodyTime=0;
    this.momBodyCount=0;
    //this.temp=new Image();
    //this.bigEye=new Image();
    //this.bigSwim=new Image();
    //this.bigTail=new Image();
}
momObject.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    //this.temp=mombody[this.momBodyCount];
    //this.bigEye.src="./src/bigEye0.png";
    //this.bigSwim.src="./src/bigSwim0.png";
    //this.bigTail.src="./src/bigTail0.png";
    //console.log(this.temp);
    //console.log(this.momBodyCount);
    //console.log(mombody[this.momBodyCount]);
}
momObject.prototype.draw=function(){
    this.x=lerpDistance(mx,this.x,0.98);
    this.y=lerpDistance(my,this.y,0.98);
    var deltaX=mx-this.x;
    var deltaY=my-this.y;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.6);
    this.momTailTime+=deltaTime;
    if(this.momTailTime>50){
        this.momTailCount=(this.momTailCount+1)%8;
        this.momTailTime%=50;
    }
    this.momEyesTime+=deltaTime;
    if(this.momEyesTime>this.momEyesInterval){
        this.momEyesCount=(this.momEyesCount+1)%2;
        this.momEyesTime%=this.momEyesInterval;
        if(this.momEyesCount==0){
            this.momEyesInterval=Math.random()*1500+2000;
        }else{
            this.momEyesInterval=200;
        }
    }
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var momTail=momtail[this.momTailCount];
    ctx1.drawImage(momTail,-momTail.width*0.5+30,-momTail.height*0.5);
    if(data.blue==1) {
        ctx1.drawImage(mombody[this.momBodyCount], -mombody[this.momBodyCount].width * 0.5, -mombody[this.momBodyCount].height * 0.5);
    }else{
        ctx1.drawImage(mombodyblue[this.momBodyCount],-mombodyblue[this.momBodyCount].width*0.5,-mombodyblue[this.momBodyCount].height*0.5);
    }
    var momEyes=momeyes[this.momEyesCount];
    ctx1.drawImage(momEyes,-momEyes.width*0.5,-momEyes.height*0.5);
    ctx1.restore();
}