const { changeState } = require('./state')
const { traits } = require('./plant-traits');

const plant = ([food, water, light]) => (state = {}) => ({
    ...state,
    eat: () => traits.feed(food)(this),
    drink: () => traits.hydrate(water)(this),
    synthesize: () => traits.giveLight(light)(this)
})

const patterns = {
    plain: plant([3, 3, 3])(),
    spotted: plant([1, 1, 1])(),
    striped: plant([6, 6, 6])()
}

const colors = {
    red: pattern => ({
        ...patterns[pattern],
        fed: traits.midIdeal(),
        hydrated: traits.highIdeal(),
        synthesized: traits.lowIdeal()
    }),
    yellow: pattern => ({
        ...patterns[pattern],
        fed: traits.lowIdeal(),
        hydrated: traits.midIdeal(),
        synthesized: traits.highIdeal()
    }),
    blue: pattern => ({
        ...patterns[pattern],
        fed: traits.highIdeal(),
        hydrated: traits.midIdeal(),
        synthesized: traits.lowIdeal()
    })
}

const color_patterns = color_pattern => color => pattern => ({
    ...colors[color](pattern),
    color: traits.color(color),
    true_color: traits.trueColor(color_pattern)(color)(pattern),
    decrement: () => traits.changeQuality(traits.feed, traits.hydrate, traits.giveLight)(traits.getTrait(color_pattern))(this)
})

const plants = randColorPattern => randColor => randPattern => {
    const state = [ color_patterns(randColorPattern)(randColor)(randPattern) ];
    state[0] = traits.feed(state[0].fed)(state[0]);
    state[0] = traits.hydrate(state[0].hydrated)(state[0]);
    state[0] = traits.giveLight(state[0].synthesized)(state[0]);

    return {
        ...state[0],
        stage: 1,
        rounds: 0,
        health: function () {
            const { soil, water, light } = this;
            if (soil == 0 || soil == 20)
                return 0;
            if (water == 0 || water == 20)
                return 0;
            if (light == 0 || light == 20)
                return 0;

            const { fed, hydrated, synthesized } = this;
            const soil_level = 20 - (20 * Math.abs(fed - soil)) / 19;
            const water_level = 20 - (20 * Math.abs(hydrated - water)) / 19;
            const light_level = 20 - (20 * Math.abs(synthesized - light)) / 19;
            return Math.floor((soil_level + water_level + light_level) / 60);
        },
        grow: function () {
            const { health, stage } = this;
            if (health() < 30 || stage == 3)
                return this;

            const { rounds, true_color } = this;
            if (rounds >= true_color.length)
                return changeState("stage")(1)(changeState("rounds")(-1 * rounds)(this))
            return changeState("rounds")(1)(this);
        }
    };
}

const generate = (n, i, arr) => {
    if (i >= n)
        return arr;
    const randColor = Math.random() * colors.length;
    const randPattern = Math.random() * patterns.length;
    const randColorPattern = randPattern == 'plain' ? -1 : Math.random() * colors.length;
    const arrangement = [randColorPattern, randColor, randPattern];
    for (let j = 0; j < i; ++j)
        if (arr[j].toString() == arrangement.toString())
            return generate(n, i, arr);
    arr[i] = arrangement;
    return generate(n, i + 1, arr);
}

const createPlants = () => {
    const colors = ['red', 'yellow', 'blue'];
    const patterns = ['plain', 'spotted', 'striped'];
    const seeds = generate(3, 0, Array(3));
    for (let i = 0; i < seeds.length; i++) 
        seeds[i] = plants(colors[seeds[i][0]])(colors[seeds[i][1]])(patterns[seeds[i][2]]);
    return seeds;
}

export default createPlants;