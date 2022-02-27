import React from "react";
import {
  Formik,
  Form,
  useField,
  useFormikContext,
  Field,
  FieldArray,
} from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

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
            grade: ["6", "7", "8", "9", "10", "11"],
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
          render={({ values }) => (
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Add Teacher</h1>
              <Form>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Register No" name="registerNo" type="text" />
                <TextField label="Address" name="address" type="text" />
                <TextField label="NIC" name="nic" type="text" />
                <TextField label="password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <label htmlFor="birthday">Birthday</label>
                <DatePickerField name="date" />
                <label>Grade</label>
                <FieldArray
                  name="grade"
                  render={(arrayHelpers) => (
                    <div>
                      {values.grade && values.grade.length > 0 ? (
                        values.grade.map((grade, index) => (
                          <div key={index}>
                            <Field name={`grade.${index}`} />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Grade
                        </button>
                      )}
                    </div>
                  )}
                />
                <br></br>
                <label> Gender</label>

                <Field as="select" name="gender">
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Field>
                <br></br>
                <button className="btn btn-dark mt-5 " type="submit">
                  Register
                </button>
              </Form>
            </div>
          )}
        />
      </div>
    </>
  );
};
