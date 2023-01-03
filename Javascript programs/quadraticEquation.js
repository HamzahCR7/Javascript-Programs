function quadratic(a,b,c){
let x1,x2;
x1=(-b+Math.sqrt((Math.pow(b,2)-(4*a*c))))/2*a
x2=(-b-Math.sqrt((Math.pow(b,2)-(4*a*c))))/2*a
console.log(x1,x2);

}
quadratic(1,1,-1)