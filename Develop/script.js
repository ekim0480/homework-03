// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = displayPassword;

}
// Setting up variables for when user inputs password's requirements.

var reqLength;
var reqLowercase;
var reqUppercase;
var reqNumber;
var reqSpecial;
var displayPassword;

// Creating arrays containing all possible characters user may want to include.

// Lowercase characters.
lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase characters.

// A possible alternative way to create and uppercase array is to use a for loop to go through the lowercaseArray and use the toUpperCase() function.

uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Numbers.

numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Special characters as per link in the assignment README.
// https://www.owasp.org/index.php/Password_special_characters

specialArr = [" ", "!", '"', "#", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Setting up an empty array where the possible character arrays will concatenated to depending on user's inputs.
// A google search for "how to combine arrays" led me to use the concat() method.

var finalArr = [];

// Function to generate the password.

function generatePassword() {

    // Asking user for desired password length.
    // parseInt() to ensure input is an integer.

    reqLength = parseInt(prompt("How many characters would you like your password to be? \n Minimum: 8 \n Maximum: 128"));

    // Validating if user's input is a number between 8 and 128
    // Googled "How to validate number javascript".
    // I decided to use the isNaN(), (isNotaNumber), function.

    if (isNaN(reqLength) || reqLength < 8 || reqLength > 128) {
        alert("Please enter a number between 8 and 128.");

        // Calling for script to be run again until input meets required conditions.



    // If conditions met, move onto "confirms".
    // True/false values will be stored into previously defined variables to be used for 
    // if/else statements that will determine what library of characters the password
    // generator will use.

    } else {
        reqLowercase = confirm("Can your password include the lowercase alphabet?");
        reqUppercase = confirm("Can your password include the UPPERCASE alphabet?");
        reqNumber = confirm("Can your password include numbers?");
        reqSpecial = confirm("Can your password include special characters?");
    };

    // Begin if/else statements to determine library of possible characters
    // depending on user's inputs.

    // If/else for if user picked "true" for only 1 of the 4 options.
    // Simply set the finalArr equal to the one "true" array.

    // If only lowercase is true.

    if (
        reqLowercase === true && 
        reqUppercase === false && 
        reqNumber === false && 
        reqSpecial === false
        ) {
            finalArr = lowercaseArr;

    // If only uppercase is true.

        } else if (
        reqLowercase === false && 
        reqUppercase === true && 
        reqNumber === false && 
        reqSpecial === false
        ) {
            finalArr = uppercaseArr;

    // If only numbers is true.

        } else if (
        reqLowercase === false && 
        reqUppercase === false && 
        reqNumber === true && 
        reqSpecial === false
        ) {
            finalArr = numberArr;

    // If only special characters is true.

        } else if (
        reqLowercase === false && 
        reqUppercase === false && 
        reqNumber === false && 
        reqSpecial === true
        ) {
            finalArr = specialArr;

    // Begin if/else for if 2 of 4 options are true.
    // Begin use of concat() method.
    // We do not need to declare true/false for all variables every time
    // since order does not matter, we don't need to double dip.
    // Eg: (reqLowercase === true && reqUppercase === true) is the same as
    //     (reqUppercase === true && reqLowercase === true)
    // Therefore, we need only declare this condition once.

    // If lowercase and one other is true.

        } else if (
        reqLowercase === true && 
        reqUppercase === true && 
        reqNumber === false && 
        reqSpecial === false
        ) {
            finalArr = lowercaseArr.concat(uppercaseArr);

        } else if (
        reqLowercase === true && 
        reqUppercase === false && 
        reqNumber === true && 
        reqSpecial === false
        ) {
            finalArr = lowercaseArr.concat(numberArr);

        } else if (
        reqLowercase === true && 
        reqUppercase === false && 
        reqNumber === false && 
        reqSpecial === true
        ) {
            finalArr = lowercaseArr.concat(specialArr);

    // If uppercase and one other is true.

        } else if (
        reqLowercase === false && 
        reqUppercase === true && 
        reqNumber === true && 
        reqSpecial === false
        ) {
            finalArr = uppercaseArr.concat(numberArr);

        } else if (
        reqLowercase === false && 
        reqUppercase === true && 
        reqNumber === false && 
        reqSpecial === true
        ) {
            finalArr = uppercaseArr.concat(specialArr);

    // If numbers and one other is true.

        } else if (
        reqLowercase === false && 
        reqUppercase === false && 
        reqNumber === true && 
        reqSpecial === true
        ) {
            finalArr = numberArr.concat(specialArr);

    // Begin if/else for if 3 options are true.

    // If lowercase and 2 others are true.

        } else if (
        reqLowercase === true && 
        reqUppercase === false && 
        reqNumber === true && 
        reqSpecial === true
        ) {
            finalArr = lowercaseArr.concat(numberArr, specialArr);

        } else if (
        reqLowercase === true && 
        reqUppercase === true && 
        reqNumber === false && 
        reqSpecial === true
        ) {
            finalArr = lowercaseArr.concat(uppercaseArr, specialArr);

        } else if (
        reqLowercase === true && 
        reqUppercase === true && 
        reqNumber === true && 
        reqSpecial === false
        ) {
            finalArr = lowercaseArr.concat(uppercaseArr, numberArr);

    // If uppercase and 2 others are true.

        } else if (
        reqLowercase === false && 
        reqUppercase === true && 
        reqNumber === true && 
        reqSpecial === true
        ) {
            finalArr = uppercaseArr.concat(numberArr, specialArr);

    // If all 4 conditions are true.

        } else if (
        reqLowercase === true && 
        reqUppercase === true && 
        reqNumber === true && 
        reqSpecial === true
        ) {
            finalArr === lowercaseArr.concat(uppercaseArr, numberArr, specialArr);
        }
    
    // Creating passwordArr variable as an empty array to later push generated password into.

    var passwordArr = [];

    // For loop in combination with Math.random to randomly pick user's desired
    // number of characters.
    // Technical formula for choosing a random item from an array:
    // Math.floor(Math.random() * (max - min +1)) + min;

    for (var i = 0; i < reqLength; i++) {
        var randomArr = finalArr[Math.floor(Math.random() * finalArr.length)];

        // Push each chosen character into the previously created passwordArr.
        
        passwordArr.push(randomArr);
    }

    // passwordArr needs to be converted into a string to display to user.
    // We can do this by using .join()
    // Google searched "how to turn array into string javascript".
    // .toString() was an option looked into but I could not remove the comma
    // between items.
    // Further research revealed that .toString() uses an empty .join as its
    // default, which always results in the comma being in between items.

    var finalPassword = passwordArr.join("");
    displayPassword = finalPassword;
}