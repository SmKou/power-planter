// import './css/fonts.css';
// import './css/styles.css';
const { feed, hydrate, givelight, plant } = require('./plant');

// Refer variables from .env => ${process.env.varName}

const plantA = plant;
plantA(feed);
plantA(hydrate);
plantA(givelight);
console.log("plantA", plantA());

const plantC = plant;
plantC(feed);
plantC(hydrate);
plantC(givelight);
console.log("plantC", plantC());

let plantB = plant();
plantB = feed(plantB);
plantB = hydrate(plantB);
plantB = givelight(plantB);
console.log("plantB", plantB);

console.log(plantA === plantC);
console.log(plantA() === plantC());

plantA(feed);
plantC(hydrate);
console.log("plantA fed", plantA())
console.log("plantC hydrate", plantC())