// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';


const INITIAL_STATE = {
    a: {},
    b: []
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.ACTION_TYPE:
            return {...state,a: action.newA};
        default:
            return state;
    }
};

//selectors
export function getA(state) {
    return state.topics.a;
}

