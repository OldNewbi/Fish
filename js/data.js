var dataObj=function(){
    this.orange=0;
    this.blue=1;
    this.score=0;
    this.gameover=false;
    this.alpha=0;
}
dataObj.prototype.draw=function(){
    ctx1.save();
    ctx1.fillStyle="white";
    ctx1.shadowBlur=10;
    ctx1.shadowColor="silver";
    ctx1.fillText("orange "+this.orange,canWidth*0.5,canHeight-80);
    ctx1.fillText("blue "+this.blue,canWidth*0.5,canHeight-50);
    ctx1.fillText("score "+this.score,canWidth*0.5,canHeight-20);
    if(this.gameover){
        ctx1.font="50px Verdana";
        //var p=0;
        this.alpha += deltaTime*0.0004;
        if(this.alpha>1) this.alpha=1;
        //console.log(p);
        ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAME OVER",canWidth*0.5,canHeight*0.5);
    }
    ctx1.restore();
}
/*dataObj.prototype.beeaten=function(i){
    mom.momBodyCount++;
    if(mom.momBodyCount>7) mom.momBodyCount=7;
    if(fruit.fruitType[i]=="blue"){
        this.blue++;

        mom.temp=mombodyblue[mom.momBodyCount];
    }else{
        this.orange++;
        mom.temp=mombody[mom.momBodyCount];
    }

}*/
dataObj.prototype.feeding=function(){
    this.score += this.orange*100*this.blue;
    this.orange=0;
    this.blue=1;
    mom.momBodyCount=0;
    //mom.temp=mombody[mom.momBodyCount];
    //ctx1.drawImage(mom.temp,mom.temp.width*0.5,mom.temp.height*0.5);
    //mom.draw();
}