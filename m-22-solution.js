// প্রাকটিস চ্যালেঞ্জ-1:
//-------------------------------------------------------------------------------\\

function areaOfTriangle(a,b,c){
     const p = (a + b + c) / 2;
     const area = Math.sqrt(p * ((p - a)*(p - b)*(p - c)));
     return area;
}
const givenInput = areaOfTriangle(20, 30, 25);
// console.log(givenInput);



// প্রাকটিস চ্যালেঞ্জ-2:
//-------------------------------------------------------------------------------\\

function isPrime(number){
     if(number <= 1){
          return false;
     }
     else if(number === 2){
          return true;
     }
     else if(number > 2){
          for(i=2; i<number; i++){
               if(number % i === 0){
                    return false;
               }
               else{
                    return true;
               }
          }
     }
}
const number = 7;
const result = isPrime(number);
console.log(result);