import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* fetchAll(){
    try {
        const items = yield call(axios.get, '/api/shelf/');
        yield put({type: 'STORE_ITEMS', payload: items.data})
    } catch (error) {
        console.log('Error in fetchAll shelfSaga GET');
    }
}

function* fetchCount(){
    const count = yield call(axios.get, '/api/shelf/count');
    yield put({type: 'STORE_COUNT', payload: count.data})
}

function* addItem(){

}

function* shelfSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('FETCH_COUNT', fetchCount);
    yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;