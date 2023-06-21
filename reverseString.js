function reverseString(str){
    if(str.length ==0){
        return null;
    }
    return str.split("").reverse().join("");

}

module.exports = reverseString;
