// This will be the values we start out with when the page loads.
const INITIAL_STATE = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0
}

// This one function is the reducer. The reducer is the heart of Redux. It tells
// redux what the initial state should be and how it should change the state
// based on any given action.
// We usually specify the initial state as the ES6 default value for the state
// parameter.
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "VOTE":
            // if a vote action comes in, modify the state.
            return vote(state, action.flavor);
        default:
            // If we don't recognize the action, don't change the state.
            return state;
    }
}

function vote(state, flavor) {
    // Just like plain React, the state is an immutable object. Rather than
    // changing part of the state, we must replace it.
    return Object.assign({}, state, {
        [flavor]: state[flavor] + 1
    });
}
