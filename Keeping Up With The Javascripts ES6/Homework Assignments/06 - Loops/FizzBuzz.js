/*
Todo: 
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

Extra Credit: Print "Prime" for prime numbers
*/

//Check if Number is prime
const checkIfPrime = (num) => {
  if (num === 1){
    return false;
  }else {
    if (num === 2){
      return true;
    }else{
      for(var x = 2; x < num; x++){
        if(num % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
}

//loop 1 to 100
for(let i = 1; i <= 100; i++){
  if (checkIfPrime(i)){
    console.log("Prime");
    continue;
  }else if( i % 15 === 0){
    console.log("FizzBuzz");
    continue;
  }else if( i % 3 === 0 ){
    console.log("Fizz");
    continue;
  }else if( i % 5 === 0 ){
    console.log("Buzz");
    continue;
  }
  
  console.log(i);
}