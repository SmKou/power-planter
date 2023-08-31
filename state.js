/* const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
        const newState = stateChangeFunction(currentState);
        currentState = { ...newState };
        return newState;
    }
}
const stateControl = storeState(); */

const changeState = (prop) => (value) => (state) => ({
    ...state,
    [prop]: (state[prop] || 0) + value
});

module.exports = { changeState }