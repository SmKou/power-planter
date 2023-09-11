// import './css/fonts.css';
// import './css/styles.css';
const { stateControl, changeState, changeGroupState } = require('./js/state');
const { createPlants } = require('./js/plant');

const state = stateControl;
const plants = [...createPlants()];

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