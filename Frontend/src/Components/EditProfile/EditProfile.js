import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../Nav/Navbar";
import "../../App.css";
import { useParams } from "react-router-dom";

export const EditProfile = () => {
  const { id } = useParams();

  const [User, SetUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  console.log(localStorage);
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/user/getById/${id}`).then((res) => {
      const user = res.data.user;

      SetUser({
        ...User,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      });
    });
  }, []);

  // const Initial = {
  //   firstName: User.user.firstName,
  //   lastName: User.user.lastName,
  //   email: User.user.email,
  // };

  return (
    <>
      <div className="container">
        <Formik
          initialValues={{ ...User }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
            axios
              .post(`http://localhost:3000/user/editProfile/${id}`, values)
              .then(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  console.log(error);
                }
              );
            switch (User.role) {
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
          }}
        >
          {(fomik) => (
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Edit Profile</h1>
              <Form>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  // placeholder={User.firstName}
                  placeholder={User.firstName}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder={User.lastName}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder={User.email}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Change password"
                />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />
                <button className="btn btn-dark mt-3" type="submit">
                  Update
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};
