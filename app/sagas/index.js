import {delay} from "redux-saga";
import {call,put,takeEvery,all, race, take} from "redux-saga/effects";
import apiCall from '../api/apiRequest';
import endPoints from '../api/endPoints'

export function* helloSaga(){
    console.log("From Saga ===========");
}

export function* getBooks(){
    //yield call(delay, 1000)
    //while(true){
        //yield take('GET_BOOKS_ASYNC');
        const books = yield call(apiCall.bind(this,{
            method: 'get',
            endpoint: endPoints.books
        }));
        console.log("books========",books);
        yield put({type:'GET_BOOKS',books:books});
}


export function* getBooksAsync(){
    yield takeEvery('GET_BOOKS_ASYNC',getBooks)
}

export default function* rootSaga() {
    yield all([helloSaga,
        getBooksAsync()
    ])
}