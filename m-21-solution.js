// প্রাকটিস চ্যালেঞ্জ-1: 
//................................................................................\\

/* function highestNumber(number){
     highest = number[0];
     for(i=0; i<number.length; i++){
          let element = number[i];
          console.log(element);
          if(element > highest){
               highest = element;
          }
     }
     return highest;
}
const number = [50, 70, 60, 80, 100];
const givenNumber = highestNumber(number);
console.log('Highest number is:',givenNumber);
 */



// প্রাকটিস চ্যালেঞ্জ-2:
//................................................................................\\

/* function lowestNumber(numbers){
     lowest = numbers[0];
     for(i=0; i<numbers.length; i++){
          const elements = numbers[i]
          console.log(elements)
          if(elements < lowest){
               lowest = elements;
          }
     }
     return lowest;
}
const numbers = [10, 30, 32, 65, 97];
const givenNumbers = lowestNumber(numbers);
console.log('Lowest number is:',givenNumbers); */



// প্রাকটিস চ্যালেঞ্জ-3: 
//................................................................................\\

/* function result(num1, num2, num3){
     let minNumber = Math.min(num1, num2, num3);
     return minNumber
}
const givenNumbers = result(95, 96, 98);
console.log('Min number is:',givenNumbers); */



// প্রাকটিস চ্যালেঞ্জ-4:
//................................................................................\\

function getAverage(numbers){
     let sum = 0
     for(i=0; i<numbers.length; i++){
          sum = sum + numbers[i];
          avg = sum / numbers.length;
     }
     return avg;
}
const numbers = [ 70, 50, 80, 97, 84];
const givenNumbers = getAverage(numbers);
console.log(givenNumbers)