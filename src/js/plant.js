const { changeState } = require('./state');

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const getHighIdeal = () => Math.random() * 4 + 12
const getMidIdeal = () => Math.random() * 4 + 8
const getLowIdeal = () => Math.random() * 4 + 4

const getColor = color => {
    const option = Math.random() * 2 - 1;
    if (option > 0)
        return color_progressions[color][1]
    else
        return color_progressions[color][0]
}

const color_progressions = {
    'red': [
        [magenta, vermillion],
        [purple, orange]
    ],
    'yellow': [
        [amber, chartreuse],
        [orange, green]
    ],
    'blue': [
        [violet, teal],
        [purple, green]
    ]
}

const getTrueColor = color_pattern => color => pattern => pattern != "" ? `${color_pattern}-${pattern} ${color}` : `${pattern} ${color}`

const getTrait = color_pattern => {
    switch (color_pattern) {
        case 'red':
            return -2;
        case 'yellow':
            return 2;
        case 'blue':
            return -3;
        default:
            return -1;
    }
}

const changeQuality = (fn, gn, hn) => val => state => fn(val)(gn(val)(hn(val)(state)))

/* Plant Composition */

const plant = ([food, water, light]) => (state = {}) => ({
    ...state,
    eat: () => feed(food)(this),
    drink: () => hydrate(water)(this),
    synthesize: () => giveLight(light)(this)
})

const patterns = {
    plain: plant([3, 3, 3])(),
    spotted: plant([1, 1, 1])(),
    striped: plant([6, 6, 6])()
}

const colors = {
    red: pattern => ({
        ...patterns[pattern],
        fed: getMidIdeal(),
        hydrated: getHighIdeal(),
        synthesized: getLowIdeal()
    }),
    yellow: pattern => ({
        ...patterns[pattern],
        fed: getLowIdeal(),
        hydrated: getMidIdeal(),
        synthesized: getHighIdeal()
    }),
    blue: pattern => ({
        ...patterns[pattern],
        fed: getHighIdeal(),
        hydrated: getMidIdeal(),
        synthesized: getLowIdeal()
    })
}

const color_patterns = color_pattern => color => pattern => ({
    ...colors[color](pattern),
    color: getColor(color),
    true_color: getTrueColor(color_pattern)(color)(pattern),
    decrement: () => changeQuality(feed, hydrate, giveLight)(getTrait(color_pattern))(this)
})

const plants = () => {
    const colors = ['red', 'yellow', 'blue'];
    const patterns = ['plain', 'spotted', 'striped'];

    const randColor = Math.random() * colors.length;
    const randPattern = Math.random() * patterns.length;
    const randColorPattern = randPattern == 'plain' ? -1 : Math.random() * colors.length;
    
    const state = [
        color_patterns(colors[randColorPattern])(colors[randColor])(patterns[randPattern])
    ];
    state[0] = feed(state[0].fed)(state[0]);
    state[0] = hydrate(state[0].hydrated)(state[0]);
    state[0] = synthesize(state[0].synthesized)(state[0]);

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

module.exports = { plants }