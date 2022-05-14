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
import "./AddTeacher.css";
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

export const AddTeacher = React.memo(() => {
  const [teacherCount, setTeacherCount] = useState(0);
  var Teacher = "";

  if (teacherCount < 9) {
    Teacher = "HMV00";
  } else if (teacherCount < 99) {
    Teacher = "HMV0";
  } else {
    Teacher = "HMV";
  }
  const UserName = Teacher + (teacherCount + 1) + "T";
  console.log(UserName);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/getTeacherCount`).then((res) => {
      // console.log(res.data.count);
      setTeacherCount(res.data.count);
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
    nic: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    tp: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(10, "Password must be at least 10 charaters")
      .required("Required"),
  });

  return (
    <>
      <img
        className="scl
"
        src="/image/—Pngtree—teachers day poster teachers day_953401.jpg"
        alt=""
        width="1550px"
        height="1350px"
      />
      <div className="mainteacher">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            grade: [],
            userName: "",
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
            <div className="subteacher">
              <Form>
                <h1 className="attext ">Add Teacher</h1>
                <br />
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <div className="t">
                  <TextField label="Email" name="email" type="email" />
                </div>
                <TextField
                  label="User Name"
                  name="userName"
                  type="text"
                  placeHolder={UserName}
                />
                <TextField label="Address" name="address" type="text" />
                <TextField label="NIC" name="nic" type="text" />
                <TextField label="Phone Number" name="tp" type="number" />
                <TextField label="password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <label htmlFor="birthday">Birthday</label>
                <DatePickerField name="date" />
                <label className="mt-3">Grade</label>

                <div role="group" aria-labelledby="checkbox-group">
                  <label>
                    <Field type="checkbox" name="grade" value="6" />6
                  </label>
                  <label>
                    <Field type="checkbox" name="grade" value="7" />7
                  </label>
                  <label>
                    <Field type="checkbox" name="grade" value="8" />8
                  </label>
                  <label>
                    <Field type="checkbox" name="grade" value="9" />9
                  </label>
                  <label>
                    <Field type="checkbox" name="grade" value="10" />
                    10
                  </label>
                  <label>
                    <Field type="checkbox" name="grade" value="11" />
                    11
                  </label>
                </div>

                <div>
                  <label> Subject</label>

                  <Field as="select" name="subject" className="subject">
                    <option value=""></option>
                    <option value="Sinhala">Sinhala</option>
                    <option value="Maths">Maths</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Commers">Commers</option>
                    <option value="Music">Music</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Drama">Drama</option>
                    <option value="Dance">Dance</option>
                    <option value="Art">Art</option>
                    <option value="Health">Health</option>
                  </Field>
                  <br></br>
                </div>

                {/* <FieldArray
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
                /> */}
                <br></br>
                <label> Gender</label>

                <Field as="select" name="gender" className="gender">
                  <option value=""></option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Field>
                <br></br>
                <div className="regiButton">
                  <button className="btn btn-dark mt-5 " type="submit">
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
