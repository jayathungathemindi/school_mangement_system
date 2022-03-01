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
      console.log(status);
      if (status === 200) {
        localStorage.setItem("id", data.user._id);
        localStorage.setItem("login", true);
        yield put(Login.sucess(data, true));

        switch (data.user.role) {
          case "Admin": {
            window.location = `/admin`;
            break;
          }
          case "Teacher": {
            window.location = `/teacher`;
            break;
          }
          case "Student": {
            window.location = `/student`;
            break;
          }
        }
      }
    } catch (error) {
      alert("Sign In Faild - Enter correct UserName and Password");
      yield put(Login.fail(error));
    }
  },
};

export default [takeLatest(ActionTypes.LOGIN, Loginsaga.getloginDetails)];
