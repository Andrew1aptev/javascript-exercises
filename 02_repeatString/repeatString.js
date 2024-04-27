const repeatString = function(string, number) {
    let allStrings = ""
    if(number >= 0){
        for(index = 0; index < number; index++){
            allStrings += string 
        }
        return allStrings
    } else if(string.length === 0){
        return ""
    } else {
        return "ERROR"
    }

};
repeatString('Andrew', 3)
// Do not edit below this line
module.exports = repeatString;
