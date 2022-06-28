const myName = "Ruhul Islam";
const age = 22;
const birthday = "July 02";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Bangladesh.",
  "I went to Warren Mott.",
  "I then went to Oakland University.",
  "I love to be in nature.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  // (0,10]
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// EXTENDED CHALLANGES

let hours = 0;
let wage = 10;
let pay = 0;

class Paycheck {
  constructor(wage, hours) {
    this.wage = wage;
    this.hours = hours;

    if (hours <= 40) {
      pay = hours * wage;
    } else {
      pay = 40 * wage + (hours - 40) * 1.5 * wage;
    }
    console.log(pay);
  }
}

const employeeOne = new Paycheck(10, 20);
const employeeTwo = new Paycheck(10, 40);
const employeeThree = new Paycheck(10, 50);
const employeeFour = new Paycheck(12, 60);
