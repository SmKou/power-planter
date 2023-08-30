const { changeState } = require('./state');


// const blueFood = changeState("soil")(5);
// const greenFood = changeState("soil")(10);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);
// const pureWater = changeState("water")(10);

// const giveLight = changeState("light")(1);
// const directLight = changeState("light")(5);
// const pureSunlight = changeState("light")(10);

// const hydratePlant = fn => plant => ({
//     ...plant,
//     hydrate: function () { return fn(this) }
// })

// const giveLightToPlant = fn => plant => ({
//     ...plant,
//     giveLight: function () { return fn(this) }
// })

// const setLimit = min => max => prop => value => state => ({
//     ...state,
//     ["max_" + prop]: (state["max_" + prop] || (Math.random() * max + min))
// })

// const blue_plant = name => {
//     const state = { name }
//     return {
//         ...state,
//         ...feedPlant(blueFood),
//         ...hydratePlant(hydrate),
//         ...giveLightToPlant(pureSunlight)
//     }
// }

// const green_plant = name => {
//     const state = { name }
//     return {
//         ...state,
//         ...feedPlant(greenFood),
//         ...hydratePlant(superWater),
//         ...giveLightToPlant(giveLight)
//     }
// }

const feed = changeState("soil")(1);

const feedPlant = fn => plant => ({
    ...plant,
    feed: function () { return fn(this) }
})

const red_plant = name => {
    const state = { name }
    return {
        ...state,
        ...feedPlant(feed),
        ...hydratePlant(pureWater),
        ...giveLightToPlant(directLight)
    }
};

module.exports = {
    red_plant,
    blue_plant,
    green_plant,
    feedPlant,
    feed
}