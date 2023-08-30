// import './css/fonts.css';
// import './css/styles.css';
const { pink_plant, red_plant, maroon_plant, feed } = require('./plant');

// Refer variables from .env => ${process.env.varName}

const a = red_plant("A$$word");
console.log(a);
console.log("a eats", a.feed());
console.log(a);
const b = feed(a);
const c = feed(b);
console.log("feed a", a, c);
const d = a.feed();
const e = d.feed();
console.log("a feeds", a, e);

const i = pink_plant;
console.log("pink", i);
const n = maroon_plant;
console.log("maroon", n);