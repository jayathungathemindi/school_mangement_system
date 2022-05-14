import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddQuestion.css";
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

  const remove = (id) => {
    SetQuiz(quiz.filter((quiz) => quiz._id !== id));
  };

  const quizView = () => {
    return quiz.map((questions, index) => {
      return (
        <>
          {questionType == "mcq" ? (
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-header">
                {" "}
                {index + 1} {questions.question.questionName}
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">{questions.question.option_1}</li>
                <li class="list-group-item">{questions.question.option_2}</li>
                <li class="list-group-item">{questions.question.option_3}</li>
                <li class="list-group-item">{questions.question.option_4}</li>
              </ul>

              <button
                type="button"
                className="secondary"
                onClick={() => remove(questions._id)}
              >
                X
              </button>
            </div>
          ) : null}

          {questionType == "boolean" ? (
            <div class="card mt-5" style={{ width: "18rem" }}>
              <div class="card-header">
                {" "}
                {index + 1} {questions.question.questionName}
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">True</li>
                <li class="list-group-item">False</li>
              </ul>
              <button
                type="button"
                className="secondary"
                onClick={() => remove(questions._id)}
              >
                X
              </button>
            </div>
          ) : null}
        </>
      );
    });
  };
  const drawerInfo = () => {
    return (
      <div>
        <label>Select Question Type</label>

        <div className="mt-3">
          <select
            class="form-select"
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
          <div>
            <div>
              <div className="mt-3">
                {" "}
                <label className="ml-3">Question {count}</label>
              </div>
              <label className="ml-3 mt-3">Enter Your question</label>
              <div className="mt-3">
                <input
                  type="text "
                  name={`questionName`}
                  placeholder="Enter Your Question"
                  onChange={Add}
                />
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <input
                type="text "
                name={`option_1`}
                onChange={Add}
                placeholder="Option 1"
              />
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
              <input
                type="text "
                name={`option_2`}
                onChange={Add}
                placeholder="Option 2"
              />
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
              <input
                type="text "
                name={`option_3`}
                onChange={Add}
                placeholder="Option 3"
              />
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
              <input
                type="text "
                name={`option_4`}
                onChange={Add}
                placeholder="Option 4"
              />
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
        ) : null}

        {questionType == "boolean" ? (
          <div>
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
                <input
                  type="text "
                  name={`questionName`}
                  placeholder="Enter Your Question"
                  onChange={Add}
                />
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
                  onClick={(e) => {
                    upload(e);
                  }}
                >
                  Upload
                </button>
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
                className="mt-3"
              />
            </div>
          </div>
          {quizView()}
          {drawer ? drawerInfo() : null}

          <div>
            {" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setDrawer(true);
              }}
              className="mt-3"
            >
              Add Question
            </button>
          </div>
          <div>
            {" "}
            <button onClick={(e) => handleSubmit(e)}>submit</button>
          </div>
        </form>
      </div>
      ;
    </>
  );
}
