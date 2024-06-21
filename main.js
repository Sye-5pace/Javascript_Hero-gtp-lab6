//Task #1 Define a superhero object
let superhero = {
  name: 'Superman',
  secretIdentity: 'Clark Kent',
  powers: ['flight', 'super strength', 'heat vision'],
  weakness: 'Kryptonite'
};

//Task #2 Add methods to the superhero object
superhero.usePower = function(powerName) {
  console.log(`${this.name} uses ${powerName}!`);
};

superhero.revealIdentity = function() {
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Example:
superhero.usePower('heat vision'); 
superhero.revealIdentity();

// Task #3
// Constructor function for Superhero
const Superhero = (name, secretIdentity, powers, weakness) => {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

// Create a new superhero using the constructor
let batman = new Superhero('The Flash', 'Barry Allens', ['speed', 'intelligence'], 'family');


// Task #4
// Add a method using prototype for all Superhero instances
Superhero.prototype.usePower = function(powerName) {
  console.log(`${this.name} uses ${powerName}!`);
};

// Example usage:
batman.usePower('kick boxing'); 