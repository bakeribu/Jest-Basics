//This function takes input as a string and reverse the string.

const reverseString = str =>
    str
        .split('') //Split each character into array
        .reverse()//Reverses each character
        .join('')//Join each character to a string

module.exports = reverseString; //This will export the file to the other test file.