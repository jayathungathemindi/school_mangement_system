import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddQuestion.css";
import Swal from "sweetalert2";
export default function AddQuestion() {
  const { grade } = useParams();
  const [drawer, setDrawer] = useState(false);
  const [question_Mcq, setMcqQuestion] = useState({
    questionName: "",
    option_1: "",
    option_2: "",
    option_3: "",
    option_4: "",
  });

  const [questionType, setQuestionType] = useState("");
  const [question_Boolean, setBooleanQuestion] = useState({
    questionName: "",
    option_1: "True",
    option_2: "False",
  });

  const [quiz, SetQuiz] = useState([]);
  const [count, setCount] = useState(1);
  const [quizName, setName] = useState({});
  const [answer, setAnswer] = useState("");

  const [UserID, SetUserID] = useState("");
  const [qIndex, setQindex] = useState(0);

  useEffect(() => {
    SetUserID(localStorage.getItem("id"));
    // axios
    //   .get(`http://localhost:3000/user/getById/${localStorage.getItem("id")}`)
    //   .then((res) => {
    //     const user = res.data.user;
    //     const userData = res.data.userData;
    //     // console.log(user);
    //     // console.log(userData);

    //     if (res.data.user.role == "Teacher") {
    //       SetUserData((UserData) => [...UserData, { grade: userData.grades }]);
    //     }
    //   });
  }, []);
  // console.log(UserID);

  const Add = ({ currentTarget: input }) => {
    if (questionType == "boolean") {
      setBooleanQuestion({ ...question_Boolean, [input.name]: input.value });
    } else {
      setMcqQuestion({ ...question_Mcq, [input.name]: input.value });
    }
  };

  const upload = (e) => {
    e.preventDefault();

    setDrawer(false);
    setCount(count + 1);

    if (questionType == "boolean") {
      SetQuiz([
        ...quiz,
        {
          id: count,
          question: question_Boolean,
          answer: answer,
          questionType: questionType,
        },
      ]);
    } else {
      SetQuiz([
        ...quiz,
        {
          id: count,
          question: question_Mcq,
          answer: answer,
          questionType: questionType,
        },
      ]);
    }
  };

  const remove = (e, id) => {
    e.preventDefault();
    console.log(id);
    SetQuiz(quiz.filter((quiz) => quiz.id !== id));
    if (id == 1) {
      setQindex(0);
    } else {
      setQindex(qIndex - 1);
    }

    setCount(count - 1);
  };

  const quizView = () => {
    return (
      <>
        <div>
          {quiz[qIndex].questionType == "mcq" ? (
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-header">
                {" "}
                ({qIndex + 1}) {quiz[qIndex].question.questionName}
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  a. {quiz[qIndex].question.option_1}
                </li>
                <li class="list-group-item">
                  b. {quiz[qIndex].question.option_2}
                </li>
                <li class="list-group-item">
                  c. {quiz[qIndex].question.option_3}
                </li>
                <li class="list-group-item">
                  d.{quiz[qIndex].question.option_4}
                </li>
              </ul>

              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => remove(e, quiz[qIndex].id)}
              >
                X
              </button>
            </div>
          ) : null}
        </div>
        <div>
          {quiz[qIndex].questionType == "boolean" ? (
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-header">
                {" "}
                ({qIndex + 1}) {quiz[qIndex].question.questionName}
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">True</li>
                <li class="list-group-item">False</li>
              </ul>
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => remove(e, quiz[qIndex].id)}
              >
                X
              </button>
            </div>
          ) : null}
        </div>
      </>
    );
  };
  const drawerInfo = () => {
    return (
      <div className="select_Q_type">
        <label>Select Question Type</label>

        <div className="mt-3">
          <select
            class="QuestionType_select"
            aria-label="select type"
            name="type"
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option selected>Open this select menu</option>
            <option value="mcq">MCQ</option>
            <option value="boolean">Boolean</option>
          </select>{" "}
        </div>

        {questionType == "mcq" ? (
          <div className="question_content">
            <div className="question_Subcontent">
              <div>
                <div className="mt-3">
                  {" "}
                  <label className="ml-3">Question {count}</label>
                </div>
                <label className="ml-3 mt-3">Enter Your question</label>
                <div className="mt-3">
                  {/* <input
                  type="text "
                  name={`questionName`}
                  placeholder="Enter Your Question"
                  onChange={Add}
                /> */}
                  <textarea
                    type="text "
                    name={`questionName`}
                    placeholder="Enter Your Question"
                    onChange={Add}
                    className="question_Name"
                  ></textarea>
                </div>
              </div>
              <div className="mt-3">
                {" "}
                {/* <input
                type="text "
                name={`option_1`}
                onChange={Add}
                placeholder="Option 1"
              /> */}
                <textarea
                  type="text "
                  name={`option_1`}
                  onChange={Add}
                  placeholder="Option 1"
                  className="Option_input"
                ></textarea>
                <input
                  type="checkbox"
                  className="ml-1"
                  name={answer}
                  value={question_Mcq.option_1}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                {" "}
                {/* <input
                type="text "
                name={`option_2`}
                onChange={Add}
                placeholder="Option 2"
              /> */}
                <textarea
                  type="text "
                  name={`option_2`}
                  onChange={Add}
                  placeholder="Option 2"
                  className="Option_input"
                ></textarea>
                <input
                  type="checkbox"
                  className="ml-3"
                  name={answer}
                  value={question_Mcq.option_2}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                {" "}
                {/* <input
                type="text "
                name={`option_3`}
                onChange={Add}
                placeholder="Option 3"
              /> */}
                <textarea
                  type="text "
                  name={`option_3`}
                  onChange={Add}
                  placeholder="Option 3"
                  className="Option_input"
                ></textarea>
                <input
                  type="checkbox"
                  className="ml-3"
                  name={answer}
                  value={question_Mcq.option_3}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                {" "}
                {/* <input
                type="text "
                name={`option_4`}
                onChange={Add}
                placeholder="Option 4"
              /> */}
                <textarea
                  type="text "
                  name={`option_4`}
                  onChange={Add}
                  placeholder="Option 4"
                  className="Option_input"
                ></textarea>
                <input
                  type="checkbox"
                  className="ml-3"
                  name={answer}
                  value={question_Mcq.option_4}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                <button
                  onClick={(e) => {
                    upload(e);
                  }}
                >
                  Upload
                </button>{" "}
              </div>
            </div>
          </div>
        ) : null}

        {questionType == "boolean" ? (
          <div className="question_content">
            <div className="question_Subcontent">
              <div>
                <div>
                  {" "}
                  <label className="mt-3">Question {count}</label>
                </div>
                <div className="mt-3">
                  {" "}
                  <label className="ml-3">Enter Your question</label>
                </div>
                <div className="mt-3">
                  {" "}
                  {/* <input
                  type="text "
                  name={`questionName`}
                  placeholder="Enter Your Question"
                  onChange={Add}
                /> */}
                  <textarea
                    type="text "
                    name={`questionName`}
                    placeholder="Enter Your Question"
                    onChange={Add}
                    className="question_Name"
                  ></textarea>
                </div>
              </div>

              <div>
                <div>
                  {" "}
                  <label className="mt-3">True</label>
                </div>
                <input
                  type="checkbox"
                  name="true"
                  value="True"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <div>
                  {" "}
                  <label className="mt-3">False</label>
                </div>
                <input
                  type="checkbox"
                  name="false"
                  value="False"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <div className="mt-3">
                  {" "}
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      upload(e);
                    }}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(quiz);
    console.log(quizName);

    axios
      .post("http://localhost:3000/add/quiz", {
        quizName,
        grade,
        quiz,
        UserID,
      })
      .then((res) => {
        console.log(res.data);
      });
    Swal.fire({
      title: "Quiz Addded",
      type: "success",
      text: "Sucessfully Quiz Added.",
      confirmButtonColor: "#3bb19b",
      timer: 8500,
    });
    window.location = `/teacher`;
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="quizContent">
            {" "}
            <label htmlFor="quizName" className="mt-3">
              Quiz Name
            </label>
            <div>
              {" "}
              <input
                type="text "
                name="quizName"
                onChange={(e) => setName(e.target.value)}
                className="quizName_Input"
              />
            </div>
          </div>

          <div>
            {quiz.length == 0 ? null : (
              <div className="qIndex">
                {quiz.map((id, index) => {
                  return (
                    <button
                      className="btn btn-primary qIndex_button"
                      onClick={(e) => {
                        e.preventDefault();
                        setQindex(index);
                      }}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="add_question">
            {" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setDrawer(true);
              }}
              className="mt-3 btn btn-light"
            >
              <img src="/image/plus.png" alt="" width="20px" height="20px" />
              Add Question
            </button>
          </div>
          <div className="quiz_submit">
            {" "}
            <button
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              submit
            </button>
          </div>
          {quiz.length == 0 ? null : quizView()}
          {drawer ? drawerInfo() : null}
        </form>
      </div>
      ;
    </>
  );
}
