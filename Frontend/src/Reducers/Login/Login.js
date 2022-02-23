import { ActionTypes } from "../../Constant/ActionType";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCESS:
      return { ...state, payload: payload, login: true };
    default:
      return state;
  }
};
