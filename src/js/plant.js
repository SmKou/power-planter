import { stateControl, changeState } from "./state";

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const pureWater = changeState("water")(10);

const givelight = changeState("light")(1);
const directLight = changeState("light")(5);
const pureSunlight = changeState("light")(10);

export {
    feed,
    blueFood,
    greenFood,
    hydrate,
    superWater,
    pureWater,
    givelight,
    directLight,
    pureSunlight
}