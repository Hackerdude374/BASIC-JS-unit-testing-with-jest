function lengthOfLongestSubstring(string){
    //base cases
    if(string.length == 0){

        return 0;
    }
    if(string.length == 1){
        return 1;
    }
    let map = new Map();
    let maxlength = 0;
    let start = 0;
    for(let i = 0; i < string.length; i++){
        if(map.has(string[i])){
            start = Math.max(start, map.get(string[i])+1); 
        
    }
    map.set(string[i],i);
    maxlength = Math.max(maxlength, i-start+1);
}
return maxlength;

}

module.exports = lengthOfLongestSubstring;
