import React, { useEffect, useState } from "react";
import "../../App.css";
import "./SubjectView.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";

const SubjectView = () => {
  const { subject } = useParams();
  const id = localStorage.getItem("id");
  const [documents, setDocuments] = useState([]);
  const [Quiz, setQuiz] = useState([]);
  const [subDisable, setSubDisable] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [answerCount, SetCount] = useState(0);
  const [quizview, setquizView] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelect, setQuizSelect] = useState(false);
  const [questionCount, SetQuestionCount] = useState(0);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/getDocuments/${localStorage.getItem(
          "id"
        )}/${subject}`
      )
      .then((res) => {
        console.log(res.data);
        // console.log(userData);
        setDocuments(res.data.documents);
      });

    axios
      .get(
        `http://localhost:3000/getQuiz/${localStorage.getItem("id")}/${subject}`
      )
      .then((res) => {
        console.log(res.data);
        // console.log(userData);
        setQuiz(res.data.quiz);
      });
  }, []);

  const chekAnswer = (userAnswer, answer) => {
    if (userAnswer == answer) {
      SetCount(answerCount + 1);
    }
  };
  const SubmitAnswer = () => {
    setSubDisable(true);
    setCheckAnswer(true);
  };
  const quizView = (index, qCount) => {
    setquizView(true);
    setQuizIndex(index);
    setQuizSelect(true);
    SetQuestionCount(qCount);
  };
  const quizBak = () => {
    setQuizSelect(false);
    setquizView(false);
    setQuizIndex(0);
    setCheckAnswer(false);
    setSubDisable(false);
    SetCount(0);
  };
  return (
    <>
      <div className="container sub_contain">
        <div>
          {documents.length == 0 ? (
            <>
              <h4>No Documents</h4>
            </>
          ) : (
            <div>
              <h4>Documents</h4>
              {documents.map((document) => {
                return (
                  <>
                    <div className="docname">
                      {" "}
                      <a href={document.documentPath}>
                        <button
                          className="btn btn-primary"
                          disabled={quizSelect}
                        >
                          {document.documentName}{" "}
                        </button>
                      </a>
                    </div>
                    {/* <li>{document.documentPath}</li> */}
                  </>
                );
              })}
            </div>
          )}
        </div>
        <div className="mt-5 ">
          <h4>Quiz</h4>
          {Quiz.map((quiz, index) => {
            return (
              <>
                <div className="quizname">
                  <button
                    className="btn btn-primary  "
                    onClick={() => quizView(index, quiz.questions.length)}
                    disabled={quizSelect}
                  >
                    {quiz.quizName}{" "}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {quizview == true ? (
            <div className="quizView">
              <div>
                {" "}
                <button className="btn btn-light" onClick={() => quizBak()}>
                  <ArrowLeftOutlined />
                  <label className="back">back</label>
                </button>
              </div>

              <h4>{Quiz[quizIndex].quizName}</h4>
              <div>
                {subDisable == true ? (
                  <div>
                    correct answer = {answerCount}/{questionCount}
                  </div>
                ) : null}
              </div>

              {Quiz[quizIndex].questions.map((question, index) => {
                return (
                  <>
                    {question.questionType == "mcq" ? (
                      <div>
                        <div class="card mt-5" style={{ width: "18rem" }}>
                          <div class="card-header">
                            {" "}
                            {index + 1} {question.question.questionName}
                          </div>

                          <ul class="list-group list-group-flush">
                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_1}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_1}
                            </div>
                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_2}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_2}
                            </div>

                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_3}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_3}
                            </div>

                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_4}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_4}
                            </div>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div class="card mt-5" style={{ width: "18rem" }}>
                          <div class="card-header">
                            {" "}
                            {index + 1} {question.question.questionName}
                          </div>

                          <ul class="list-group list-group-flush">
                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_1}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_1}
                            </div>
                            <div class="list-group-item">
                              {" "}
                              <input
                                name={index}
                                type="radio"
                                value={question.question.option_2}
                                onChange={(e) => {
                                  chekAnswer(e.target.value, question.answer);
                                }}
                              />{" "}
                              <label></label>
                              {question.question.option_2}
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}

                    <div>
                      {checkAnswer == true ? (
                        <div className="correctAnswer">
                          {" "}
                          answer : {question.answer}{" "}
                        </div>
                      ) : null}
                    </div>
                  </>
                );
              })}
              <br></br>
              <button
                className="btn btn-primary"
                disabled={subDisable}
                onClick={() => SubmitAnswer()}
              >
                {" "}
                submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default SubjectView;
