const reverseString = function(string) {
    const arr = string.split('').reverse().join('')
    return arr
};
console.log(reverseString("Andrew Laptev"));
// Do not edit below this line
module.exports = reverseString;
