function Animal(type, name, sound){
this.type =type;
this.name =name;
this.sound =sound;
this.say=function(){
console.log(this.sound);
};
const gubun = "동물";
}
 
const dog = new Animal('개', '고양이', '멍멍');
const cat = new Animal('고양이', '야옹이', '냥냥');

dog.say();
cat.say();

console.log(dog.gubun);

