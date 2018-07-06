import axios from 'axios';
import {call, post, takeEvery} from 'redux-saga';

function* fetchAll(){

}

function* fetchCount(){

}

function* addItem(){
    
}

function* shelfSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('FETCH_COUNT', fetchCount);
    yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;