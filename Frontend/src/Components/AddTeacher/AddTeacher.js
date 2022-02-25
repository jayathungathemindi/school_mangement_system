import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import "../../App.css";

export const AddTeacher = () => {
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
  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
            axios.post("http://localhost:3000/user/addTeacher", values).then(
              (response) => {
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );

            window.location = `/admin`;
          }}
        >
          {(formik) => (
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Add Teacher</h1>
              <Form>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />

                <button className="btn btn-dark mt-5 " type="submit">
                  Register
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};