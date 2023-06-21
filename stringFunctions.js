/*
Part 2: Algorithm Testing

Create a new JavaScript file called stringFunctions.js.
Implement the following functions in stringFunctions.js:
reverseString(str): Takes a string str and returns the reversed string.
isPalindrome(str): Takes a string str and returns true if it is a palindrome, and false otherwise.
Create a test file called stringFunctions.test.js.
Write test cases in stringFunctions.test.js to verify the correctness of each function in stringFunctions.js using Jest. Ensure you cover different scenarios, including edge cases and special characters.
Run the tests using Jest and ensure that all tests pass.*/

function reverseString(str){
    if(str.length ==0){
        return null;
    }
    return str.split("").reverse().join("");

}

function isPalindrome(str){
    //case 0 if first and last letter not equal then not palindrome
    if(str[0] != str[str.length-1]){
        return false;
    }
    if(str.length==0){
        return false;
    }
    //case 1 if so 
        //find palindrome using reverse and lowercase
        let lowercaseCombined = str.split("").join("");
        let reversed = lowercaseCombined.split("").reverse().join("");
        if(lowercaseCombined == reversed){
            return true;
        }
        return false;
}












module.exports ={
    reverseString: reverseString,
    isPalindrome: isPalindrome
}
