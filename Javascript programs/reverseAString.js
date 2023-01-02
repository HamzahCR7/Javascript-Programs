function reverseSting(word) {
  let reverseWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {           1st way
//     reverseWord = reverseWord + word[i];
//   }
reverseWord=[...word].reverse().join('');              //pure js way
  console.log(reverseWord);

}
let word = "Hamzah Aslam";
reverseSting(word);
