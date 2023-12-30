
//javaacript PROJECT ABOUT FUN FACT GENERATOR

//FOR MY GITHUB ONLY 
//FOR PORTFOLIO

document.getElementById('fact-button').addEventListener('click', function() {
    const facts = [
    "Octopuses have three hearts!",
      "Honey never spoils!",
     "Bananas are berries!",
    "Penguins can jump 6 feet!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').innerText = randomFact;
});
