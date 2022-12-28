let num=101;
function palindrome(num){
    let result=0;
    result=Number(String(num).split('').reverse().join(''));
    result==num ?console.log("A palindrome"):console.log("not palindrome");
}
palindrome(num);