const { changeState } = require('./state')

const traits = {
    feed: changeState('soil'),
    hydrate: changeState('water'),
    giveLight: changeState('light'),
    ideal: () => Math.random() * 4,
    highIdeal: function () {
        return this.ideal() + 12
    },
    midIdeal: function () {
        return this.ideal() + 8
    },
    lowIdeal: function () {
        return this.ideal() + 4
    },
    colorProgressions: {
        'red': [
            ['magenta', 'vermillion'],
            ['purple', 'orange']
        ],
        'yellow': [
            ['amber', 'chartreuse'],
            ['orange', 'green']
        ],
        'blue': [
            ['violet', 'teal'],
            ['purple', 'green']
        ]
    },
    color: function(color) {
        const option = Math.random() * 2 - 1;
        return this.colorProgressions[color][option > 0 ? 1 : 0]
    },
    trueColor: colorPattern => color => pattern => `${pattern !== "" ? colorPattern + '-' : ''}${pattern} ${color}`,
    getTrait: colorPattern => {
        switch (colorPattern) {
            case 'red':
                return -2;
            case 'yellow':
                return -1;
            case 'blue':
                return -3;
            default:
                return -2;
        }
    },
    changeQuantity: (fn, gn, hn) => val => state => fn(val)(gn(val)(hn(val)(state)))
}

export default traits;