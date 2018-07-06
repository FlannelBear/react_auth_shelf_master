import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* fetchAll(){

}

function* fetchCount(){
    try{
        const countResponse = yield call(axios.get, '/api/shelf/count');
        yield put({type: 'STORE_COUNT', payload: countResponse.data});
    } catch(error) {
        console.log(error);
    }
}

function* addItem(){

}

function* shelfSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('FETCH_COUNT', fetchCount);
    yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;