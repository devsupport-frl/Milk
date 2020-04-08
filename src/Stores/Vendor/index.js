/**
 * Created by Murali.
 */

import {autoRehydrate, persistStore} from "redux-persist-immutable";
import {combineReducers} from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import {REHYDRATE} from "redux-persist";
import Immutable from "immutable";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";

//Reducer Import
import LoginReducer from "../../Reducer/Vendor/loginReducer";

// Sage Import
import * as Saga from "../../Sagas/Vendor/loginSaga";


const combinedReducers = combineReducers({
  login: LoginReducer,
});

const initialState = new Immutable.Map({
  login: Immutable.Map({
   chatdata: []
  }),
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({log: true})));
    persistStore(
    store,
    {
      storage: AsyncStorage,
      blacklist: ['root'],
    }
  );
  return {
     ...store, runSaga: [
      sagaMiddleware.run(Saga.loginSaga),
     ]
  };
}
