import { createStore, combineReducers  } from 'redux';
import userReducer from './Reducers/userReducers';
import gameReducer from './Reducers/gameReducer';


  
  const allReducers = combineReducers({
    user: userReducer,
    game : gameReducer});
  
  // create store
  let store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default  store;