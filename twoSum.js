function twoSum(array, targetSum){
    let map = new Map();//this is to find if the array contains the complement.
    
    for(let i = 0; i< array.length;i++){
        complement = targetSum-array[i]; //find the complement
        if(map.has(complement)){//success
            let index1 =map.get(complement) ;
            let index2 = i;
            return [index1,index2];
        }
        //if no complement update complement
        map.set(array[i], i);
    }
    return [];
}

module.exports = twoSum;
