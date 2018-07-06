import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function* fetchAll(){

}

function* fetchCount(){
    const count = yield call(axios.get, '/api/shelf/count');
    yield put({type: 'STORE_COUNT', payload: count.data})
}

function* addItem(action){
        console.log('in addItem');
        try {
            yield call( axios.post,'/api/shelf',action.payload)
            yield put({type: 'FETCH_ALL'});
        } catch (error){
            console.log('Error in addItem:', error)
        }
    }

function* shelfSaga(){
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('FETCH_COUNT', fetchCount);
    yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;