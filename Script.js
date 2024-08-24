//Arrays

// let fruits = ["Apple", "Orange", "Banana", "Peach"];
// // console.log(fruits[0]);
// fruits.push("Mango");

// console.log(fruits.indexOf("Orange"));

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Spread Operator
// let numbers = [1,2,3,4,5];

// let maximum= Math.max(...numbers);
// console.log(maximum);

// let userName="Ali";
// let letters=[...userName];
// console.log(letters);

// Res parameter

// function fridge(...foods){
//     console.log(foods);

// }

// let food1 = "pizza";
// let food2 = "burger";
// let food3 = "fries";
// let food4 = "chicken";
// let food5 = "Beef";

// fridge(food1,food2,food3,food4,food5);



let inputE = document.querySelector(".num");
let btnE = document.querySelector(".btn");
let diceResultE = document.querySelector(".diceresult");
let imageResultE = document.querySelector(".imageresult");
let values = [];
let images = [];

const dice = () => {
  // Clear previous results
  values = [];
  images = [];

  // Get the number of dice rolls from the input
  let numRolls = parseInt(inputE.value);
  if(numRolls==" "){
    diceResultE.classList.remove("diceresult");
    diceResultE.textContent="Please entre a number of dice rolls";
  }
else{

  for (let i = 0; i < numRolls; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="Dice/${value}.jpg" alt="Dice ${value}">`);
  }

  diceResultE.classList.remove("diceresult");
  diceResultE.textContent = `Dice: ${values.join(", ")}`;
  imageResultE.classList.remove("imageresult");
  imageResultE.innerHTML = images.join(" ");

}
};


btnE.addEventListener("click", dice);

