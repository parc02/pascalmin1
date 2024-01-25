class Food{
    constructor(name){
	this.name = name;
	this.brands = [];
    }
    addBrand(brand) {
	this.brands.push(brand)
    }
    print() {
	console.log(`${this.name}을/를 파는 음식점들:`)
	console.log(this.brands.join(', '));
		}
    	}

class Pizza extends Food{
    constructor(brand){
	super('피자',brand);
	super(addBrand(brand));
	}
}



const pizza = new Pizza('도미노피자', '피자헛');

pizza.print()

