// import './css/fonts.css';
// import './css/styles.css';
const { stateControl, changeState, changeGroupState } = require('./js/state');
const { createPlants } = require('./js/plant');

const state = stateControl;
const plants = [...createPlants()];
const plantCards = plants.map((plant, i) => ({
    name: document.getElementById(`name-${i + 1}`),
    type: document.querySelector(`type-${i + 1}`),
    color: document.querySelector(`color-${i + 1}`),
    stage: document.querySelector(`stage-${i + 1}`),
    health: document.querySelector(`health-${i + 1}`),
    soil: document.querySelector(`soil-${i + 1}`),
    water: document.querySelector(`water-${i + 1}`),
    light: document.querySelectorAll(`light-${i + 1}`)
}))
for (const [i, plant] of plantCards.entries()) {
    plant.name.addEventListener('input', e => {
        const value = e.target.value;
        document.querySelector(`plant-${i + 1} h3`).innerHTML = "";
        const span = document.createElement('span');
        span.append(document.createTextNode(value));
        document.querySelector(`plant-${i + 1} h3`).append(span);

        document.querySelectorAll(`name-${i + 1}`).append(document.createTextNode(value));

        plant.name.removeEventListener();
    })
}
document.querySelectorAll('button.feed').forEach(btn => {
    btn.addEventListener('click', e => {
        const plantN = e.target.id.split('-')[1];
        plants[plantN - 1]
    })
})

function start() {
    state(changeGroupState("notifications")([]));
    state(changeState("status")(1));
    state(changeState("counter")(0));
    document.querySelectorAll('.plant').forEach(div => div.classList.remove('hidden'));
    update();
}

function update() {

    if (state().status)
        requestAnimationFrame(update);
}

document.getElementById("play").addEventListener('click', start)
document.getElementById("pause").addEventListener('click', () => {
    state(changeState("status")(0))
})
document.getElementById("reset").addEventListener()