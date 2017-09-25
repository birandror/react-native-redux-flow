import * as types from './actionsTypes';

export const <actionName> = (text) => {
    return {
        type: types.<ACTION_TYPE>,
        payload: text
    }
};

export const asyncAction = (text) => {
    return async(dispatch, getState) => {
        console.log(`getState() = ${getState()}`);
        const newText = await someAsyncfunction();
        dispatch({type: types.<ACTION_TYPE>, payload: newText})
    }
};
