import * as API from "../../Service";
import * as Action from "../../Action";
import { ActionTypes } from "../../Constant/ActionType";
import { put, call, takeLatest } from "redux-saga/effects";

const { getUserDetails } = API.LoginService;

const { Login } = Action.LoginAction;

const Loginsaga = {
  getloginDetails: function* (action) {
    const params = action.payload.data;

    try {
      const { data, status } = yield call(getUserDetails, params);

      if (status === 200) {
        localStorage.setItem("token", data);
        yield put(Login.sucess(data, true));
        window.location = `/admin/${data.user._id}`;
      }
    } catch (error) {
      window.location = "/";
      alert("Sign In Faild");
      yield put(Login.fail(error));
    }
  },
};

// function* watcherUserSaga() {
//   yield takeEvery(ActionTypes.LOGIN, Loginsaga.getloginDetails);
// }

// export default watcherUserSaga;
export default [takeLatest(ActionTypes.LOGIN, Loginsaga.getloginDetails)];
