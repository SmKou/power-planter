// import './css/fonts.css';
// import './css/styles.css';
const { red_plant, feedPlant, feed } = require('./plant');

// Refer variables from .env => ${process.env.varName}

const a = red_plant("A$$word");

console.log(a);
console.log(b);
console.log(c);

const a_fed = feed(a);
console.log(a_fed);

const a_caneat = feedPlant(feed)(a_fed);
console.log(a_caneat);

const a_fed2 = a_caneat.feed();
console.log(a_fed2);