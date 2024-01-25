var arr  = [1,2,3,4,5,6,7];
arr.pop();

console.log('-------------------after pop');
console.log(arr);

arr.push(7);

console.log('----------------after push');
console.log(arr);

arr.splice(3,2);
console.log('-----------------after splice');
console.log(arr);


var arr=[1,2,3,4,5,6,7];
arr.splice(2,1,"a","b");
console.log('---------after splice 2,1');
console.log(arr);

var arr=[1,2,3,4,5,6,7,8,9,10];
var isEven = function(value){
    return value % 2 ===0;
};
console.log('------------after some');
console.log(arr.some(isEven));

