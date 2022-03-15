//STEP 1
// let halfNum;
// function halfNumber(num) {
//     halfNum = num / 2;
//     return console.log(`Half of ${num} is ${halfNum}.`);
// }
// halfNumber(5);

//STEP 2
// let squareNum;
// function squareNumber(num) {
//     squareNum = num * num;
//     return console.log(`The result of squaring the number ${num} is ${squareNum}.`);
// }
// squareNumber(3);

//STEP 3
// let result;
// function percentOf(percentage, num) {
//     result = num * (percentage / 100);
//     return console.log(`${result} is ${percentage}% of ${num}.`);
// }
// percentOf(50, 4);

//STEP 4
// let modulus;
// function findModulus(num1, num2) {
//     modulus = parseInt(((num1 / num2) - parseInt(num1 / num2)) * num2);
//     return console.log(`${modulus} is the modulus of ${num2} and ${num1}.`)
// }
// findModulus(10, 4);
// // I used a couple of parseInt in case the results are decimals

//STEP 5
let strNums = prompt('Enter whole numbers separated each by commas(no space).');
let nums = strNums.split(',');
for (let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i], 10);
}
function calculate(nums) {
    let base = 0;
    for (let i = 0; i < nums.length; i++) {
        base += Number(nums[i]);
    }
    console.log(base);
}
calculate(nums);
