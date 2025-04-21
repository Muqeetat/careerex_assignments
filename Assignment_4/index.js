// 1. Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)

function checkJambScore(score) { 
	if (score >= 180) { 
	  console.log("Passed"); // 180 and above
	} else {
	  console.log("Failed"); // below 180
	}
  }

  checkJambScore(190);
  checkJambScore(170); // Example usage: replace 190 and 170 with any score to test

// 2. Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

function canYouVote(age) {
	if (age >= 18) {
		console.log("You are eligible to vote"); // 18 and above
  }
  else {
		console.log("Not eligible"); // below 18
}
}

canYouVote(20);
canYouVote(16);

// 3. Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function evaluateStudentScore(name, score) {
	if (score >= 90) {
	  console.log( "Excellent");
	} else if (score >= 75) {
	 console.log("Good");
	} else if (score >= 50) {
	  console.log("Average");
	} else {
	  console.log("Fail");
	}
  }

evaluateStudentScore("John", 95); // "Excellent"
evaluateStudentScore("Jane", 80); // "Good"
evaluateStudentScore("Doe", 55); // "Average"
evaluateStudentScore("Smith", 45); // "Fail"
evaluateStudentScore("Tolu", 100); // "Excellent"

// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.

function checkAccess(hasID, isAbove18) {
	console.log(hasID && isAbove18 ? "Access granted" : "Access denied");
  }

checkAccess(true, true); // Access granted
checkAccess(true, false); // Access denied
checkAccess(false, true); // Access denied
checkAccess(false, false); // Access denied

// 5. Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

let scores= [45, 67, 89, 34, 78];

	for (let i = 0; i < scores.length; i++) {
	  if (scores[i] > 50) {
		console.log("Pass");
	  } else {
		console.log("Fail");
	  }
	}


// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const passedBoth = (math, english) => {
	if (math >= 50 && english >= 50) {
		console.log( "Yes"); // passed both
	} else {
		console.log( "No"); // failed either or both
	}
}

passedBoth(60, 70); // Yes
passedBoth(40, 80); // No

// 7. Create a function that checks if a user has either an email or a phone number before signing up.

function canSignUp(email, phone) {
	if (email || phone) {
	  console.log ("Signup allowed");
	} else {
	  console.log("Email or phone required");
	}
  }

// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

function validateLogin(username, password) {
	if (!username || !password) {
	  console.log("Invalid input");
	} else {
	  console.log("Login success");
	}
  }
  
  // Test cases
  validateLogin("user123", "password123"); // Login success
  validateLogin("", "password123");        // Invalid input
  validateLogin("user123", "");            // Invalid input
  validateLogin("", "");                   // Invalid input	

// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.

function checkWorkStatus(hours) {
	console.log(hours >= 40 ? "Full-time" : "Part-time");
  }

checkWorkStatus(45); // Full-time
checkWorkStatus(35); // Part-time

// 10. Write an arrow function that takes two numbers and returns the larger one.

const findLargerNum = (num1, num2) => {
	console.log(num1 > num2 ? num1 : num2);
  }

findLargerNum(10, 20); // 20
findLargerNum(30, 15); // 30



