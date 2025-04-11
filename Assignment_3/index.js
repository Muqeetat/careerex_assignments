// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
const my_name = "Muqeetat Aderinto"; // Stores the name
let age = 25; // Stores the age
let nationality = "Nigerian"; // Stores the nationality

// combine the above variables into an introduction sentence
const intoduction = `My name is ${my_name}. I'm ${age} years old. I'm from Nigeria, so I'm a ${nationality}.`;
console.log(intoduction); // Prints the introduction


// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.
let fav_lyric = "Don't be a hard rock when you really are a gem. - Lauryn Hill";
console.log(fav_lyric.toLocaleUpperCase()); // Converts the quote to uppercase and prints it
console.log(fav_lyric.toLocaleLowerCase()); // Converts the quote to lowercase and prints it


// 3. Take a word and rearrange it in reverse order, then log the reversed word.
let word = "Muqeetat"; // The original word
let reversed_word = word.split("").reverse().join(""); // Splits into characters, reverses them, and joins them back
console.log(reversed_word); // Prints the reversed word


// 4. Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
let rice = 2000;      // Price of rice
let beans = 3000;     // Price of beans
let chicken = 5000;   // Price of chicken
let total_amount = rice + beans + chicken; // Adds all three prices
console.log(`The total price is: ${total_amount}`); // Prints the total amount


// 5. Find the average of 5 test scores stored in variables. Display the average with a message.
let test_score1 = 85; 
let test_score2 = 90;
let test_score3 = 78;
let test_score4 = 88;
let test_score5 = 92;

// Calculates the average by adding all scores and dividing by 5
let average_score = (test_score1 + test_score2 + test_score3 + test_score4 + test_score5) / 5;
console.log(`The average score is: ${average_score}`); // Displays the average


// 6. Create an array of your 5 favorite foods. Display the first and last items in the array.
const favorite_foods = ["Jollof Rice", "Pasta", "Pizza", "Chinese rice", "Ice Cream"];
console.log(`The first food is: ${favorite_foods[0]}`); // Displays the first item in the array

favorite_foods.reverse(); // Reverses the array
console.log(`The last food is: ${favorite_foods[0]}`); // After reversing, the original last item is now first
favorite_foods.reverse(); // Reverse the array back

// 7. Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favorite_foods.unshift("Chicken Burger"); // Adds "Chicken Burger" to the beginning
favorite_foods.push("Salad"); // Adds "Salad" to the end
console.log("Updated list of favorite foods: ", favorite_foods); // Prints the updated food list


// 8. Create three arrays: Each array must contain 10 student names as string values.

// jssOne: Array for JSS1 student names
const jssOne = ["Tolu", "Femi", "Hassan", "Chuka", "Olamide", "Kolade", "Zainab", "Damilola", "Opemipo", "Toluwa"];

// jssTwo: Array for JSS2 student names
const jssTwo = ["Ayomide", "Tomi", "Dayo", "Bola", "Kemi", "Tunde", "Funmi", "Tayo", "Folake", "Emmanuel"];

// jssThree: Array for JSS3 student names
const jssThree = ["Ayoola", "Bamide", "Efe", "Hakeem", "Ife", "Jide", "Kehinde", "Lola", "Micheal", "Nifemi"];


// 10.jssThree
const jssThree = ["Ayoola", "Bamide", "Efe", "Hakeem", "Ife", "Jide", "Kehinde", "Lola", "Micheal", "Nifemi"];
