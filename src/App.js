import React from  'react';
import { connect } from 'react-redux';
import userActions from './Store/Actions/UserActions';
import gameActions from './Store/Actions/GameActions';
import './App.css';



function App(props) {
  console.log("props",props);
  return (
    <> 
        <h1>Redux Tutorial</h1> 
        User Name : {props.user.name} <button onClick={()=>props.updatename()}>Update</button> <br />
        GAME Name : {props.game.name} <button onClick={()=>props.gameUpdate()}>Update</button>
    </>
    
  );
}

const mapStatetoProps = (state) => {
  console.log("state",state);
    return state
}



const mapDispatchtoProps = (dispatch) => {
  return {
    updatename : ()=> dispatch(userActions),
    gameUpdate : ()=> dispatch(gameActions)
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(App);
