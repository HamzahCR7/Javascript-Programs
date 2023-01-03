function swap(a,b){
    //  console.log(a,b)
    //  a=a+b;
    //  b=a-b;       //normal way without third variable
    //  a=a-b;

     [a,b]=[b,a]  //pure js way
     console.log(`After swap ${a} and ${b}`)

} 
swap(100,150)