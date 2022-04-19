const userActions = { type:'USER_UPDATE' , payload : {name : 'Welcome Redux'} }

const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_FAILED = 'GET_USERS_FAILED'

 function getUsers(){
    return {
        type:GET_USERS_REQUESTED
    }
}


export{ GET_USERS_REQUESTED,GET_USERS_SUCCESS, GET_USERS_FAILED,getUsers}
export default userActions;