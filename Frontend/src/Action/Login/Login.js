import { ActionTypes } from "../../Constant/ActionType";

export default {
  Login: {
    get: (data) => ({
      type: ActionTypes.LOGIN,
      payload: {
        data: data,
      },
    }),
    sucess: (data, boleean) => ({
      type: ActionTypes.LOGIN_SUCESS,

      payload: {
        data: data,
      },
      login: boleean,
    }),
    fail: (error) => ({
      type: ActionTypes.LOGIN_FAIL,
      error: error,
    }),
  },
};
