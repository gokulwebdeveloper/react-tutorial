import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import userReducer from './Reducers/userReducers';
import gameReducer from './Reducers/gameReducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from './Saga';

const sagaMiddleWare = createSagaMiddleware();


 const initalState = {
   user : {
     name: 'Welcome',
     users: {}
   },
   game : {
     name: 'Football'
   }
 };
  
  const allReducers = combineReducers({
    user: userReducer,
    game : gameReducer});
   
  // create store
  let store = createStore(allReducers, initalState, compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

  sagaMiddleWare.run(userSaga);

export default  store;