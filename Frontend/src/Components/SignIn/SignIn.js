import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SignIn.css";
import { connect } from "react-redux";
import * as Action from "../../Action";
import { bindActionCreators } from "redux";
import "../../App.css";

const SignIn = (props) => {
  const [data, setData] = useState({ userName: "", password: "" });

  const [error, setError] = useState("");
  useEffect(() => {
    localStorage.setItem("login", false);
  }, []);

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
        <img
          src="/image/josefa-ndiaz-IzmdWT2lW5Q-unsplash.jpg"
          alt=""
          width="1550px"
          height="100%"
        />
        <div className="containerr">
          <div className={styles.login_container}>
            <div className="formContent">
              <div className={styles.left}>
                <div>
                  <form onSubmit={handleSubmit}>
                    <h3 className="logintext">Login to Your Account</h3>
                    <div className="form-inner">
                      <div className="form-group">
                        <label htmlFor="email">
                          <h4>User Name</h4>
                        </label>
                        <p></p>
                        <input
                          type="userName"
                          placeholder="User Name"
                          name="userName"
                          onChange={handleChange} //((e)=>setname(e.target.value))
                          value={data.userName}
                          required
                          className={styles.input}
                        />
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          <h4>Password</h4>
                        </label>{" "}
                        <p></p>
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
                    </div>{" "}
                    <br />
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className="btn btn-primary ">
                      Sing In
                    </button>
                  </form>
                </div>
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
  // console.log(state);
  return {
    LoginReducer,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login: LoginAction.Login.get }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
