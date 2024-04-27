const removeFromArray = function(array, ...numbers) {
    let filteredArray = array.filter(item => !numbers.includes(item));
    return filteredArray
};
console.log(removeFromArray([1,2,3,4],3,4));
// Do not edit below this line
module.exports = removeFromArray;
