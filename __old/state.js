const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
        const newState = stateChangeFunction(currentState);
        currentState = { ...newState };
        return newState;
    }
}
const stateControl = storeState();

const changeState = (prop) => (value) => (state) => ({
    ...state,
    [prop]: (state[prop] || 0) + value
});

const changeGroupState = (prop) => (values) => state => ({
    ...state,
    [prop]: [...state[prop], ...values]
})

// const a = stateControl;
// const b = stateControl();
// console.log("a", a);
// console.log("b", b);
// a(changeState("notifications")([]));
// console.log("a", a);
// const b_2 = stateControl(changeState("notificatons")([]));
// console.log("b", b_2);
// console.log(a(), b_2);
// const c = stateControl(changeState("something-else")([]));
// console.log(c);

// a = b; use of a allowed no need for setting new variables

module.exports = { stateControl, changeState, changeGroupState }