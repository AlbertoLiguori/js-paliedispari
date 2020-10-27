//Generatore numero casuale in un determinato range
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//stabilisce se una somma è pari (e se non è zuppa...)
function evenTest (a,b){
  return ((a+b) % 2 == 0);
}



document.getElementById("play").addEventListener("click", function(){

  //Prende gli input

  //Pari o Dispari
  var even = document.getElementById("inputEven").checked;
  console.log(even);
  var odd = document.getElementById("inputOdd").checked;
  console.log(odd);

  //I numeri in gioco
  var num = parseInt(document.getElementById("inputNum").value);
  console.log(num);
  var anotherNum = randomBetween(0, 5);
  console.log(anotherNum);

  //Elabora gli output

  //Stampa resoconto
  document.getElementById("opponentNum").innerHTML="Il tuo avversario ha giocato un: " + anotherNum;
  document.getElementById("yourNum").innerHTML="Tu hai giocato un: " + num;

  console.log(anotherNum)

  //Calcola e stampa il risultato
  if ((evenTest(num, anotherNum) && even ) || (!(evenTest(num, anotherNum)) && odd)){
      document.getElementById("output").innerHTML=" Hai vinto è uscito: "+ (num+anotherNum);
  } else{
      document.getElementById("output").innerHTML=" Hai perso è uscito: "+ (num+anotherNum);
  }

})
