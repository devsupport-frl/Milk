/**
 * Created by Murali on 4/4/2020.
 */


import {call, put, take} from "redux-saga/effects";
import * as constants from "../../Config/Constants/constants";
import * as actions from "../../Action/Vendor/loginAction";


function* login(userName,password) {
  yield put(actions.setLoginError("naveen"));
  // try {
  //  var list = yield call(Api.SearchAPI,searchtxt);
  //  if (list.length !== 0) {
  //     yield put(homeActions.setListSuccess(list));
  //     return list;
  //   } else {
  //     yield put(homeActions.setError(list));
  //     return undefined
  //   }
  // } catch (error) {
  //   yield put(homeActions.setError(error));
  // }
}

export function* loginSaga() {
    while (true) {
      const {userName,password} = yield take(constants.ACTION_LOGIN);
      yield call(login, userName,password);
    }
}
