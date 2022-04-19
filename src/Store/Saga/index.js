import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USERS_REQUESTED,GET_USERS_SUCCESS,GET_USERS_FAILED} from '../Actions/UserActions';
import axios from 'axios';

function getApi(){
    return axios.get('https://reqres.in/api/users?page=2').then(function(res){
        return res.data.data;
    })
}

function* fetchUsers(){
    try{
        const users = yield call(getApi);
        yield put({type:GET_USERS_SUCCESS,payload:users});
    }catch(e){
        yield put({type:GET_USERS_FAILED,payload:e.message});
    }
}

function* userSaga(){
  yield takeEvery(GET_USERS_REQUESTED,fetchUsers);
}

export default userSaga;