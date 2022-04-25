// constant variable the show the humans age
const myAge = 29; 
// variable that shows the dog age
let earlyYears = 2;
earlyYears *=10.5;
// later years of dog
let laterYears = myAge - 2;
//calculeaza laterYears in dog years
laterYears *= 4;


console.log(earlyYears);
console.log(laterYears);

// calculates the total of age in dog years
let myAgeInDogYears = earlyYears + laterYears;
const myName ='Irina'.toLowerCase();
//logs myname and ,human age and dog years
console.log(`My name is ${myName}. I am 
                        ${myAge} years old in HUMAN AGE which is
                        ${myAgeInDogYears} DOG YEARS old in dog years.`);
