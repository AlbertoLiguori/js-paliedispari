//
// document.getElementById("go").addEventListener("click", function(){
//
//   var word = document.getElementById("palInput").value.toLowerCase()
//
//   //.split trasforma una stringa in un array. Se ARG = ("") inserirà
//   // ogni lettera che compone la stringa come elementi dell'Array
//   var wordToArray = word.split("")
//   console.log(wordToArray)
//
//   //.reverse inverte l'ordine degli elementi di un array
//   var reversedArray= wordToArray.reverse()
//   console.log(reversedArray)
//
//   //.join trasforma gli elementi di un array in una stringa.Se mancano le virgolette
//   // restituirà ogni elemento separato dalla virgola
//   var reversedArrayToString = reversedArray.join("")
//
//   console.log(reversedArrayToString)
//
//   if(reversedArrayToString == word){
//     document.getElementById("result").innerHTML="La parola inserita è Palindroma"
//   }else{
//     document.getElementById("result").innerHTML="La parola inserita <strong> NON </strong> è Palindroma"
//   }
//
// })


// function reverseWord (word){
//   var wordToArray = word.split("");
//   var reversedArray= wordToArray.reverse();
//   var reversedArrayToString = reversedArray.join("");
//   return (reversedArrayToString == word)
// }

// function reverseWordPro(word){
//   var reversedArrayToString = word.split("").reverse().join("")
//   return (reversedArrayToString == word)
// }

// var i= 0;
// var j = 0;

function reverseWordPre(word){
  var reverseWord =[]
  for(i = 0, j = word.length; i < word.length, j>=0; i++, j--){
      reverseWord[i] = word[j]
  }
  return (reverseWord.join("") == word)
}

console.log(reverseWordPre("ciao"))



document.getElementById("go").addEventListener("click", function(){

var inputWord = document.getElementById("palInput").value.toLowerCase()

if (reverseWordPre(inputWord)){
  document.getElementById("result").innerHTML="La parola inserita è Palindroma"
}else{
  document.getElementById("result").innerHTML="La parola inserita <strong> NON </strong> è Palindroma"
  }

})
