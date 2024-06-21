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