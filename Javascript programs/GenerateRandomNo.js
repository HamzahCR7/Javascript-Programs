function randomNoGenerte(){
    //Note:Math.random() gives number bewteen 0 and 1
    console.log((Math.random()*10));
    console.log(~~(Math.random()*10));//bitwise op to remove decimals
    console.log(Number((Math.random()*100).toFixed(0)))//another way to trucate decimals
    console.log(Number((Math.random()*100).toFixed(2)))//fixed number upto 2 decimal digits
    console.log(Number((Math.random()*100).toFixed(3)))//fixed number upto 2 decimal digits
    console.log(Math.floor(Math.random()*10));//another way to trucate decimals
    let a=15,b=30;
    console.log(Math.floor(Math.random()*(b-a))+a);//find random no bw two numbers
    

}
randomNoGenerte();