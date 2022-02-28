import { useState } from "react";
// import axios from "axios";
import styles from "./SignIn.css";
import { connect } from "react-redux";
import * as Action from "../../Action";
import { bindActionCreators } from "redux";
import "../../App.css";

const SignIn = (props) => {
  const [data, setData] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      props.login(data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="main">
      {" "}
      <div className="sub-main">
        <img src="/image/signup.png" alt="" />
        <div className="containerr">
          <div className={styles.login_container}>
            <div className={styles.login_form_container}>
              <div className={styles.left}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                  <h1>Login to Your Account</h1>
                  <div className="form-inner">
                    <div className="form-group">
                      <label htmlFor="email">User Name</label>
                      <input
                        type="userName"
                        placeholder="User Name"
                        name="userName"
                        onChange={handleChange}
                        value={data.userName}
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                      />
                    </div>{" "}
                  </div>
                  {error && <div className={styles.error_msg}>{error}</div>}
                  <button type="submit" className={styles.green_btn}>
                    Sing In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const { LoginAction } = Action;

const mapStateToProps = (state) => {
  //no need this component
  const { LoginReducer } = state;
  console.log(state);
  return {
    LoginReducer,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login: LoginAction.Login.get }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
