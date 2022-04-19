import {GET_USERS_SUCCESS,GET_USERS_FAILED} from '../Actions/UserActions';

const userReducer = (state={ name : 'Hello World',user:{},error:'' },action) => {
    switch(action.type){
          case 'USER_UPDATE':
              return  action.payload;  
          case GET_USERS_SUCCESS :
              return {...state,user:action.payload}
          case GET_USERS_FAILED :
            return {...state,error:action.payload}
          default :
            return state;
      }
  
  }

export default userReducer;