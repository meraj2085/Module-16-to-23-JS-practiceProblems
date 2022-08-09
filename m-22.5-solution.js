// প্রাকটিস চ্যালেঞ্জ-1:
//-------------------------------------------------------------------------------\\
const myName = 'Meraj';
// console.log(typeof myName);

const age = 20;
// console.log(typeof age);

const isStudent = true;
// console.log(typeof  isStudent);


// প্রাকটিস চ্যালেঞ্জ-2:
//-------------------------------------------------------------------------------\\
let num1 = 10;
num1 = 20;
const num2 = 20;
// num2 = 30; It cant be changed because its constant value
const total = num1 + num2;
// console.log(total);


// প্রাকটিস চ্যালেঞ্জ-3:
//-------------------------------------------------------------------------------\\
let number1 = 2;
let number2 = 5;

let sum = number1 + number2;
// console.log(sum);
let subtraction = number2 - number1;
// console.log(subtraction);
let multiplication = number1 * number2;
// console.log(multiplication);
let division = number2 / number1;
// console.log(division);
let reminder = number2 % number1;
// console.log(reminder);


// প্রাকটিস চ্যালেঞ্জ-4:
//-------------------------------------------------------------------------------\\
const numb1 = 10;
const numb2 = 20;
//Greater than//
if(numb1 > numb2){
     // console.log(true);
}
else{
     // console.log(false);
}

//Less than
if(numb1 < numb2){
     // console.log(true);
}
else{
     // console.log(false);
}


//Equals to
if(numb1 == numb2){
     // console.log(true);
}
else{
     // console.log(false);
}


//Not equals to
if(numb1 !== numb2){
     // console.log(true);
}
else{
     // console.log(false);
}


//Less than or equals to
if(numb1 <= numb2){
     // console.log(true);
}
else{
     // console.log(false);
}


//Greater than or equals to
if(numb1 >= numb2){
     // console.log(true);
}
else{
     // console.log(false);
}



//প্রাকটিস চ্যালেঞ্জ-5:
//-------------------------------------------------------------------------------\\
const myAge = 19;
const salary = 50000;
//Must fulfill both condition
if(myAge >= 20 && salary >= 40000){
     // console.log('Kaji dak dimu?');
}
else{
     // console.log('Tor kopale biya nai');
}

//Must fulfill at least 1 condition
if(myAge >= 20 || salary >= 40000){
     // console.log('Kaji dak dimu?');
}
else{
     // console.log('Tor kopale biya nai');
}
 

//প্রাকটিস চ্যালেঞ্জ-6:
//-------------------------------------------------------------------------------\\
const myNumber1 = 5;
const myNumber2 = 10;
if(myNumber1 > myNumber2){
     let division = myNumber1 - myNumber2;
     // console.log(division);
}
else{
     let sum = myNumber1 + myNumber2;
     // console.log(sum);
}



// প্রাকটিস চ্যালেঞ্জ-7:
//-------------------------------------------------------------------------------\\
var i=7;
while(i<=19){
     // console.log(i);
     i += 2;
}



// প্রাকটিস চ্যালেঞ্জ-8:
//-------------------------------------------------------------------------------\\
let friendsAge = [20, 22, 23, 21, 32, 31,43, 52];
// console.log(Array.isArray(friendsAge));
// console.log(friendsAge.length);
friendsAge[4] = 10;
friendsAge.push(100, 200);
friendsAge.shift();
// console.log(friendsAge);



// প্রাকটিস চ্যালেঞ্জ-9:
//-------------------------------------------------------------------------------\\
let friendsName = ['Meraj', 'Hossain', 'samir', 'Robin', 'Donkey'];
for(i=0; i<friendsName.length; i++){
     element = friendsName[i];
     // console.log(element);
}


//1 প্রাকটিস চ্যালেঞ্জ-10:
//-------------------------------------------------------------------------------\\
const numbers = [10, 20, 40, 50, 60, 70, 100, 200, 300, 400];
for(i=0; i<numbers.length; i++){
     element = numbers[i];
     if(element > 80){
          // console.log(element);
     }
}



// প্রাকটিস চ্যালেঞ্জ-11:
//-------------------------------------------------------------------------------\\
function getMultiplication(demo1, demo2, demo3){
     multiplication = demo1 * demo2 * demo3;
     return multiplication;
}
const givenNumbers = getMultiplication(2, 3, 4)
// console.log(givenNumbers);



// প্রাকটিস চ্যালেঞ্জ-12:
//-------------------------------------------------------------------------------\\
let studentID = {
     name: 'Meraj Hossain',
     class: 11,
     subject: 'Accounting'
}
studentID.class = 20;
// console.log(studentID);





//.................................Problem Solving.................................//


// 1: Feet To Inch converter
//-------------------------------------------------------------------------------\\

function feetToInch(feet){
     let inch = feet * 12;
     return inch;
}
const feet = 10;
const givenInput = feetToInch(feet);
// console.log(givenInput);



// 2: Centimeter To Meter converter
//-------------------------------------------------------------------------------\\

function centimeterToMeter(centimeter){
     let meter = centimeter * 0.01;
     return meter;
}
const centimeter = 1000;
const myInput = centimeterToMeter(centimeter);
// console.log(myInput);



// 3: Paper required
//-------------------------------------------------------------------------------\\

function paperRequirements(book1Quan, book2Quan, book3Quan){
     const book1 = 100;
     const book2 = 200;
     const book3 = 300;
     const book1PapReq = book1 * book1Quan;
     const book2PapReq = book2 * book2Quan;
     const book3PapReq = book3 * book3Quan;
     const totalPapReq = book1PapReq + book2PapReq + book3PapReq;
     return totalPapReq;
}
const totalPaper = paperRequirements(2,1,2);
// console.log(totalPaper);



// 4: Return the friend name who has the biggest name
//-------------------------------------------------------------------------------\\

const myFriendsName = ['Hossain ', 'Fazle', 'Sayad Samiur', 'Noman'];

function bestFriend(friends){
     let biggest = friends[0]
     for(let i=0; i<myFriendsName.length; i++){
          let friendName = myFriendsName[i];
          if(friendName.length > biggest.length){
               biggest = friendName;
          }
     }
     return biggest;
}
const givenNames = bestFriend(myFriendsName);
// console.log(givenNames);



// 5:
//-------------------------------------------------------------------------------\\

function stopAtNegative(numbers){
     let positive = [];
     for(let i=0; i<numbers.length; i++){
          number = numbers[i];
          if(number <= -1){
               break;
          }
          positive.push(number);
     } 
     return positive;
}

const providedNumbers = [10, 20, 30, 40, 50, 60, -70, 80, 90];
const myNumbers = stopAtNegative(providedNumbers);
console.log(myNumbers);