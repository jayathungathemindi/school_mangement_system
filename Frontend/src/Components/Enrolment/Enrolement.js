import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

export default function Enrolement() {
  const [User, SetUser] = useState({
    user: {},
    Subject: [],
  });
  const [current_subjects, SetCurrentSubjects] = useState([]);
  const [UserID, SetUserID] = useState("");
  useEffect(() => {
    SetUserID(localStorage.getItem("id"));
    axios
      .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
      .then((res) => {
        const user = res.data.userData;
        SetUser({ ...User, user: user, Subject: user.Enroll_subjects });
        SetCurrentSubjects(res.data.userData.Enroll_subjects);
      });
  }, []);
  // console.log(current_subjects);
  const [Subject, SetSubject] = useState([
    {
      subject_name: "Music",
      grade: ["6", "7", "8", "9", "10", "11"],
    },
    {
      subject_name: "Hindi",
      grade: ["6", "7", "8"],
    },
    {
      subject_name: "Thamil",
      grade: ["9", "10", "11"],
    },
    {
      subject_name: "Drama",
      grade: ["6", "7", "8", "9", "10", "11"],
    },
    {
      subject_name: "Dance",
      grade: ["6", "7", "8", "9", "10", "11"],
    },
    {
      subject_name: "Art",
      grade: ["6", "7", "8", "9", "10", "11"],
    },
    {
      subject_name: "Japan",
      grade: ["9", "10", "11"],
    },
    {
      subject_name: "Health",
      grade: ["6", "7", "8"],
    },
  ]);
  // const filterArray = (Subject, current_subjects) => {
  //   const filtered = Subject.filter((el) => {
  //     return current_subjects.filter((sub) => sub.subject !== el.subject_name);
  //   });
  //   return filtered;
  // };
  // console.log(filterArray(Subject, current_subjects));

  // const view = () => {};
  const enroll = (subject) => {
    const Subject = subject;

    axios
      .post(`http://localhost:3000/user/student/enroll`, { UserID, Subject })
      .then((res) => {
        console.log(res.data);
      });
    window.location = `/student`;
  };
  return (
    <>
      <div className="container">
        Enrolement
        <div>
          {Subject.map((subject) => {
            return (
              <div>
                {subject.grade.map((grade) => {
                  // console.log(grade);
                  if (User.Subject.length == 0 && User.user.grade == grade) {
                    // console.log(subject.subject_name);
                    return (
                      <>
                        <div class="card" style={{ width: "18rem" }}>
                          <div class="card-body">
                            <h5 class="card-title">{subject.subject_name}</h5>
                            <p class="card-text">
                              <span>{subject.subject_name}</span> subject has to
                              enroll first
                            </p>
                            <button
                              class="btn btn-primary"
                              onClick={() => {
                                enroll(subject.subject_name);
                              }}
                            >
                              Enrolement
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
        {current_subjects.map((enrol_sub) => {
          Subject.filter((sub) => sub.subject_name == enrol_sub.subject).map(
            (cur) => {
              SetSubject(
                Subject.filter((s) => s.subject_name !== cur.subject_name)
              );
            }
          );
        })}
        <div>
          {Subject.map((subject) => {
            return (
              <div>
                {subject.grade.map((grade) => {
                  // console.log(grade);
                  if (User.user.grade == grade) {
                    // console.log(subject.subject_name);
                    return (
                      <>
                        <div class="card" style={{ width: "18rem" }}>
                          <div class="card-body">
                            <h5 class="card-title">{subject.subject_name}</h5>
                            <p class="card-text">
                              <span>{subject.subject_name}</span> subject has to
                              enroll first
                            </p>
                            <button
                              class="btn btn-primary"
                              onClick={() => {
                                enroll(subject.subject_name);
                              }}
                            >
                              Enrolement
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
