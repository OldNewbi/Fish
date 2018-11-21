var dustObj=function(){
    this.x=[];
    this.y=[];
    this.amp=[];
    this.angle=0;
    this.flotage=[];
    this.no=[];
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=Math.random()*canWidth;
        this.y[i]=Math.random()*canHeight;
        this.amp[i]=20+Math.random()*15;
        this.no[i]=Math.floor(Math.random()*7);
        //this.angle=0;
    }
    for(var j=0;j<7;j++){
        this.flotage[j]=new Image();
        this.flotage[j].src="./src/dust"+j+".png";
    }
}
dustObj.prototype.draw=function(){
    ctx1.save();
    this.angle+=deltaTime*0.0008;
    var l=Math.sin(this.angle);
    for(var i=0;i<this.num;i++){
        ctx1.drawImage(this.flotage[this.no[i]],this.x[i]+l*this.amp[i],this.y[i]);
    }
    ctx1.restore();
}