//complete this code
class Animal {
constructor(species) {
    this.species = species;
}
get makeSound(){
	console.log("sound the animal makes")
}

}

class Cat extends Animal {
purr(){
	console.log("purr")
}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
