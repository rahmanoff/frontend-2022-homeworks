import { print } from './js/lib.js';

class Inhabitant {
   constructor(species, name, gender, saying, legs) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.saying = saying;
      this.legs = legs;
   }
   printOut() {
      return ['species', 'name', 'gender', 'saying', 'legs',].map(
         (prop) => `${prop}: ${this[prop]}`
      ).join('; ');
   }
}

class Animal extends Inhabitant {
   constructor(species, name, gender, legs, saying) {
      super(species, name, gender, legs, saying);
      this.legs = 4;
   }
}

class Dog extends Animal {
   constructor(name, gender, saying) {
      super('dog', name, gender, saying);
   }
}

class Cat extends Animal {
   constructor(name, gender, saying) {
      super('cat', name, gender, saying);
   }
}

class Human extends Inhabitant {
   constructor(name, gender, saying, legs = 2) {
      super('human', name, gender, saying, legs);
      this.hands = 2;
   }
   printOut() {
      return `${super.printOut()}; hands: ${this.hands}`;
   }
}

class Woman extends Human {
   constructor(name, saying) {
      super(name, 'female', saying);
   }
}

class Man extends Human {
   constructor(name, saying) {
      super(name, 'male', saying);
   }
}

const toby = new Dog('Toby', 'male', 'woof-woof');
const alice = new Cat('Alice', 'female', 'meow');
const mary = new Woman('Mary', 'Hi, John!');
const john = new Man('John', 'Hi, Mary!');

const inhabitants = [toby, alice, mary, john];

inhabitants.forEach(inhabitant => print(inhabitant.printOut()));
