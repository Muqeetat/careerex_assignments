// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.

const my_name = "Muqeetat Aderinto";
let age = 25;
let nationality = "Nigerian";

const intoduction = `My name is ${my_name}. I'm ${age} years old. I'm from Nigeria, so I'm a ${nationality}.`;
console.log(intoduction);


//2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.

let fav_lyric = "Don't be a hard rock when you really are a gem. - Lauryn Hill";
console.log(fav_lyric.toLocaleUpperCase());
console.log(fav_lyric.toLocaleLowerCase());


// 3.Take a word and rearrange it in reverse order, then log the reversed word.

let word = "Muqeetat";
let reversed_word = word.split("").reverse().join("");
console.log(reversed_word); 


// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.

let rice = 2000;
let beans = 3000;
let chicken = 5000;
let total_amount= rice + beans + chicken;
console.log(`The total price is: ${total_amount}`);


// 5.Find the average of 5 test scores stored in variables. Display the average with a message.
let test_score1 = 85;
let test_score2 = 90;
let test_score3 = 78;
let test_score4 = 88;
let test_score5 = 92;
let average_score = (test_score1 + test_score2 + test_score3 + test_score4 + test_score5) / 5;
console.log(`The average score is: ${average_score}`);

// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.
const favorite_foods = ["Jollof Rice", "Pasta", "Pizza", "Chinese rice", "Ice Cream"];
console.log(`The first food is: ${favorite_foods[0]}`);
favorite_foods.reverse();
console.log(`The last food is: ${favorite_foods[0]}`);


// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favorite_foods.unshift("Chicken Burger");
favorite_foods.push("Salad");
console.log("Updated list of favorite foods: ", favorite_foods);

// Create three arrays: Each array must contain 10 student names as string values.
// 8.jssOne
const jssOne =["Tolu", "Femi", "Hassan", "Chuka", "Olamide", "Kolade", "Zainab", "Damilola", "Opemipo", "Toluwa"];

// 9.jssTwo
const jssTwo = ["Ayomide", "Tomi", "Dayo", "Bola", "Kemi", "Tunde", "Funmi", "Tayo", "Folake", "Emmanuel"];

// 10.jssThree
const jssThree = ["Ayoola", "Bamide", "Efe", "Hakeem", "Ife", "Jide", "Kehinde", "Lola", "Micheal", "Nifemi"];
