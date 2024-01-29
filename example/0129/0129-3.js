function append(value, array=[]){
    array.push(value);
    return array;
}
console.log(append(1));
console.log(append(2));
console.log(append(1, append(2)));
console.log(append(1,append(2, append([3,5]))));
