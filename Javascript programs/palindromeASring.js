let word="madamm";
function palindrome(word){
    let result=""
    result=[...word].reverse().join("");
    if(word==result){
        console.log("palindrome")
    }else{
        console.log("not palindrome")
    }
}
palindrome(word);