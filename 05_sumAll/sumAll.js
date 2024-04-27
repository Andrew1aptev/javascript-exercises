const sumAll = function(num1, num2) {
    let arr = [];
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    } else if (typeof num1 === "object" || typeof num2 === "object") {
        return "ERROR";
    }
    // Меняем порядок аргументов, если num1 > num2
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    for (let index = start; index <= end; index++) {
        arr.push(index);
    }
    return arr.reduce((a, b) => a + b, 0);
};
console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;

// let arr = [];

// for (let index = 1; index <= 4; index++) {
//     arr.push(index);
// }
// console.log(arr);
 
