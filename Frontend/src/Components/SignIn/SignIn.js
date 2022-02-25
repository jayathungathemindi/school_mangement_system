import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./SignIn.css";
import { connect, ConnectedProps } from "react-redux";
import * as Action from "../../Action";
import { bindActionCreators } from "redux";
import "../../App.css";

const SignIn = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      props.login(data);

      // setTimeout(() => {
      //   console.log("World!");
      // }, 5000);

      // if (props.loginSucess()) {
      //   window.location = "/admin";
      // }
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
    <div>
      {" "}
      <div className="container">
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Login to Your Account</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  Sing In
                </button>
              </form>
            </div>
            <div className={styles.right}>
              <h1>New Here ?</h1>
              <Link to="/SignUp">
                <button type="button" className={styles.white_btn}>
                  Sing Up
                </button>
              </Link>
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
