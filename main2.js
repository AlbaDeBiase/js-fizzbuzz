// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"


var numeriArray = [];
   for( var i = 1; i <101; i++){
       console.log(i);
       var valoreNum = i;
       numeriArray.push(valoreNum);
       if ((i % 3 == 0) && (i % 5 == 0)){
                      console.log("FizzBuzz");
                  } else if(i % 3 == 0){
                      console.log("Fizz");
                  } else if(i % 5 == 0){
                      console.log("Buzz");
                  } else {
                      console.log(i);
                  }
   }
