import { combineReducers } from 'redux';

const shelfReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

const countReducer = (state = [], action) => {
    if(action.type === 'STORE_COUNT'){
        return action.payload
    }
    return state;
}

export default combineReducers({
    shelfReducer, 
    countReducer
});