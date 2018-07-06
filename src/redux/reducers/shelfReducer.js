import { combineReducers } from 'redux';

const shelfReducer = (state = [], action) => {

}

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