import React, { useEffect, useState } from "react";
import {
  Formik,
  Form,
  useField,
  useFormikContext,
  Field,
  FieldArray,
} from "formik";
import { TextField } from "../TextField/TextField";
import * as Yup from "yup";
import axios from "axios";
import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddStudent.css";
import Swal from "sweetalert2";
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

export const AddStudent = React.memo(() => {
  const [studentCount, setStudentCount] = useState(0);
  var Student = "";

  if (studentCount < 9) {
    Student = "HMV00";
  } else if (studentCount < 99) {
    Student = "HMV0";
  } else {
    Student = "HMV";
  }
  const UserName = Student + (studentCount + 1) + "S";
  console.log(UserName);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getStudentCount`).then((res) => {
      console.log(res.data.count);
      setStudentCount(res.data.count);
    });
  }, []);

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
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    trust: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    nic: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });

  return (
    <>
      <img
        className="scl"
        src="/image/studentadd.jpg"
        alt=""
        width="1550px"
        height="1250px"
      />

      <div className="mainstudent">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userName: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
            axios.post("http://localhost:3000/user/addStudent", values).then(
              (response) => {
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
            Swal.fire({
              title: "Student Addded",
              type: "success",
              text: "Sucessfully Student Added.",
              confirmButtonColor: "#3bb19b",
              timer: 8500,
            });
            window.location = `/admin`;
          }}
          render={({ values }) => (
            <div className="substudent">
              <Form>
                <h1 className="attext">Add Student</h1>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField
                  label="User Name"
                  name="userName"
                  type="text"
                  placeHolder={UserName}
                />
                <TextField label="Address" name="address" type="text" />
                <TextField label="password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <label>Birthday</label>
                <DatePickerField name="date" />
                {/* <br></br> */}
                <label className="mt-2">Grade</label>
                {/* <br></br> */}
                <Field as="select" name="grade" className="grade">
                  <option value=""></option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </Field>
                <br></br>
                <label className="mt-2"> Gender</label>

                <Field as="select" name="gender" className="gender">
                  <option value=""></option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Field>
                <div className="mt-2">
                  <TextField label="Name of Trust" name="trust" type="text" />
                </div>

                <TextField label="Trust NIC" name="nic" type="text" />
                <TextField
                  label="Trust Telephone"
                  name="telephone"
                  type="text"
                />
                <div className="regiButton">
                  {" "}
                  <button className="btn btn-dark  center mt-5 " type="submit">
                    Register
                  </button>
                </div>
              </Form>
            </div>
          )}
        />
      </div>
    </>
  );
});
