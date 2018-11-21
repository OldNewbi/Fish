function momFruitsCollision(){
    if(!data.gameover) {
        for (var i = 0; i < fruit.num; i++) {
            if (fruit.alive[i]) {
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (l < 900) {
                    fruit.death(i);
                    //data.beeaten(i);
                    data.orange++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount>7) mom.momBodyCount=7;
                    if(fruit.fruitType[i]=="blue") data.blue=2;
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }
}
function momBabyCollision(){
    if(!data.gameover) {
        var l = calLength2(baby.x, baby.y, mom.x, mom.y);
        if (l < 900 && mom.momBodyCount>0) {
            baby.babyBodyCount = 0;
            data.feeding();
            halo.born(baby.x,baby.y);
        }
    }
}