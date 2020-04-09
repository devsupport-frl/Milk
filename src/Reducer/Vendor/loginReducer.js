import * as constants from "../../Config/Constants/constants";

export default function loginReducer(state, action = {}) {
  switch (action.type) {
      case constants.ACTION_LOGIN_ERROR:{
          const errormessage = action.error;
          return state.withMutations(state => state
            .set(constants.LOGIN_DATA, {})
            .set(constants.LOGIN_ERROR, errormessage)
            .set(constants.LOADING, false));
           }
      case constants.ACTION_LOGIN_SUCCESS:{
          const data = action.list;
          return state.withMutations(state => state
            .set(constants.LOGIN_DATA, data)
            .set(constants.LOGIN_ERROR, errormessage)
            .set(constants.LOADING, true));
           }
      default:
      return state;
  }

}
