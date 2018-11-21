var fruitObject=function(){
    this.alive=[];//bool
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];
    this.fruitType=[];
    this.no=[];
}
fruitObject.prototype.num=30;
fruitObject.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.no[i]=0;
        this.fruitType[i]="";
        this.spd[i]=Math.random()*0.017+0.003;//(0.003,0.02]
        //this.born(i);
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
}
fruitObject.prototype.draw=function(){
    for(var i=0;i<this.num;i++){

        if(this.alive[i]) {
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                pic=this.orange;
            }
            if (this.l[i] <=15) {
                var number=this.no[i];
                this.x[i]=ane.headx[number];
                this.y[i]=ane.heady[number];
                this.l[i] += this.spd[i] * deltaTime;
                ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            } else {
                //this.x[i]=ane.rootx[this.no[i]];
                this.y[i] -= this.spd[i] * 7 * deltaTime;
                ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);

            }
            if (this.y[i] < 10) {

                this.alive[i] = false;
            }


        }
    }
}
fruitObject.prototype.born=function(i){
    this.no[i]=Math.floor(Math.random()*ane.num);
    //this.x[i]=ane.headx[this.no[i]];
    //this.y[i]=ane.heady[this.no[i]];
    this.l[i]=0;
    this.alive[i]=true;
    var ran=Math.random();
    if(ran<0.23){
        this.fruitType[i]="blue";
    }else{
        this.fruitType[i]="orange";
    }
}
fruitObject.prototype.death=function(i){
    this.alive[i]=false;
}
function fruitMonitor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) num++;
    }
    if(num<15){
        sendFruit();
        return;
    }
}
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}