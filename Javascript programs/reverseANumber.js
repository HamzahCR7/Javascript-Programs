function reverseANumber(num){
let result=0;
//method-1
// while(num>0){
//     remainder=num%10;
//     result=result*10+remainder;
//     num=Math.floor(num/10);

// }
//method-2
// result=Number(String(num).split('').reverse().join(''));
// method-3
result=Number(num.toString().split('').reverse().join(''));


console.log(result);
}
let num=105;
reverseANumber(num);