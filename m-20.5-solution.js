// প্রাকটিস চ্যালেঞ্জ-1:
//................................................................................\\

/* function temperature(celsius){
     const fahrenheit = (celsius * 9/5)+ 32;
     return fahrenheit;
}
let celsius = 10;
let tdTemp = temperature(celsius);
console.log(tdTemp);

// Formula: (0°C × 9/5) + 32 = 32°F */



// প্রাকটিস চ্যালেঞ্জ-2:
//................................................................................\\

/* function temperature(fahrenheit){
     const celsius = (fahrenheit - 32) * (5/9);
     return celsius;
}
let fahrenheit = 50;
let myTemp = temperature(fahrenheit);
console.log(myTemp);

//Formula: (32°F − 32) × 5/9 = 0°C */



// প্রাকটিস চ্যালেঞ্জ-3:
//................................................................................\\

/* function grade(number){
     if(number <= 100 && number >= 80){
          return 'A+';
     }
     else if(number <= 79 && number >= 70){
          return 'Grade B';
     }
     else if(number <= 69 && number >= 60){
          return 'Grade C';
     }
     else if(number <= 59 && number >= 33){
          return 'Grade D';
     }
     else if(number <= 32 && number >= 0){
          return 'Grade F';
     }
     else{
          return 'Please Provide valid Number';
     }
}
const number = 101;
const myGrade = grade(number);
console.log(myGrade); */



// প্রাকটিস চ্যালেঞ্জ-4:
//................................................................................\\

// Simple Interest 

/* // সুদ + আসল
//Formula: A = P (1 + rt)
function interest(balance, time, rate){
     let finalAmount = balance * (1 + (rate * time));
     return finalAmount;
}
let balance = 1000;
let time = 2;
let rate = 0.05;
let myInterest = interest(balance, time, rate);
console.log(myInterest); */


/* // শুধুমাত্র সুদ
// Formula: P * R * T
function interest(balance, time, rate){
     let interestAmount = balance * rate * time;
     return interestAmount;
}
let balance = 1000;
let time = 2;
let rate = 0.05;
let myInterest = interest(balance, time, rate);
console.log(myInterest); */