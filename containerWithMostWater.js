function maxArea(array){
    let maxArea = 0;
    //find largest number

    let number1 = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i]>number1){
            number1 = array[i];
        }
    }
    //now we found our number1, now find a number 2
    let newNums = [];
    //push into new array with the number1 removed
    for(let i = 0; i < array.length; i++){
        if(array[i] != number1){
            newNums.push(array[i]);
        }
    }
    //find second largest number
    let number2 = newNums[0];
    for(let i = 1; i < newNums.length; i++){
        if(newNums[i]>number2){
            number2 = newNums[i];
        }
    }
     maxArea = number1*number2;
    return maxArea;
}

module.exports = maxArea;
