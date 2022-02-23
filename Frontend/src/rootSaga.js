import { all } from "redux-saga/effects";

import * as allSaga from "./Saga";
const { LoginSaga } = allSaga;

function* rootSaga() {
  yield all(LoginSaga);
}

export default rootSaga;
