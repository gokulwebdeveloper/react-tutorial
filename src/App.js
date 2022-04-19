import React from  'react';
import { connect } from 'react-redux';
import userActions,{getUsers} from './Store/Actions/UserActions';
import gameActions from './Store/Actions/GameActions';
import './App.css';


function displayUsers(users){
   const {
     user
   } = users;
   const displayUser= user.user;
  if(displayUser){
    const userDisplay=   displayUser.map((d)=>{
      return (
        <div>{d.first_name}</div>
      )
   });

   return userDisplay;
  } else {
    return false;
  }


}
function App(props) {
  const {
      user
  } = props;

  return (
    <> 
        <h1>Redux Tutorial</h1> 
        User Name : {props.user.name} <button onClick={()=>props.updatename()}>Update</button> <br />
        GAME Name : {props.game.name} <button onClick={()=>props.gameUpdate()}>Update</button>
        <button onClick={()=>props.getUsers()}>Fetch Users</button>
        {user?
           
            displayUsers(props) : ''
        }
    </>
    
  );
}

const mapStatetoProps = (state) => {
    return state
}



const mapDispatchtoProps = (dispatch) => {
  return {
    updatename : ()=> dispatch(userActions),
    gameUpdate : ()=> dispatch(gameActions),
    getUsers   : ()=> dispatch(getUsers())
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(App);
