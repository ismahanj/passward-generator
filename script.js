// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// lowercase character array 
var charInPassword = " "
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
var num = "123456789"
var specialChar = "!@#$%^&*"
var q1 = confirm("do you want lower case letters")
if (q1){
  charInPassword+=lowerCase
} 

var q2 = confirm("do you want upper case letter")
if (q2){
  charInPassword+=upperCase
} 

var q3 = confirm("do you want numbers")
if (q3){
  charInPassword+=num
} 

var q4 = confirm("do you want any special character")
if (q4){
  charInPassword+=specialChar
} 

if(charInPassword === " "){
  charInPassword=lowerCase
}

var q5 = prompt("how long do you want your password to be between 8 and 128 characters")
if (Number(q5)< 8 || Number(q5) > 128){
  alert("invaild number")
  q5= prompt("how long do you want your password to be between 8 and 128 characters")
}

function generatePassword(){

    var userPassword = " " 
    for (let i = 0; i < Number(q5); i++) {
      var randomNum = Math.floor(Math.random()*charInPassword.length)
      userPassword+= charInPassword[randomNum]  
    }
    
    return userPassword

}



