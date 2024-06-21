

// Outputs: Batman uses martial arts!




// Define Superhero constructor
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}

Superhero.prototype.usePower = function() {
    const powerIndex = Math.floor(Math.random() * this.powers.length);
    return this.powers[powerIndex];
};

// Create superhero instances
let hero1 = new Superhero('Superman', 'Clark Kent', ['flight', 'super strength', 'heat vision'], 'Kryptonite');
let hero2 = new Superhero('Batman', 'Bruce Wayne', ['martial arts', 'intelligence', 'gadgets'], 'no superpowers');

// Update UI with superhero names
document.getElementById('hero1-name').textContent = hero1.name;
document.getElementById('hero2-name').textContent = hero2.name;

document.getElementById('battleButton').addEventListener('click', () => {
    // Superheroes use their powers
    let hero1Power = hero1.usePower();
    let hero2Power = hero2.usePower();

    // Display actions in UI
    document.getElementById('hero1-action').textContent = `${hero1.name} uses ${hero1Power}!`;
    document.getElementById('hero2-action').textContent = `${hero2.name} uses ${hero2Power}!`;

    // Determine and display the winner
    let winner = Math.random() > 0.5 ? hero1.name : hero2.name;
    alert(`${winner} wins the battle!`);
});

