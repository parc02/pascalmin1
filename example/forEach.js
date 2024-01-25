 var arr=[1,2,3];
 arr.forEach(function(value)
	 {
	 console.log(value);
	 }
	 );


var arr =[1,2,3,4,5,6,7,8,9];
var isEven = function(value){
    return value %2===0;
};
var newArr = arr.map(isEven);
console.log(newArr);

