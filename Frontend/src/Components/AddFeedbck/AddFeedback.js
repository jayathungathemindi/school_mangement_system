import React, { useState } from "react";
import "../../App.css";
import "./AddFeedback.css";
import axios from "axios";
import Swal from "sweetalert2";
const AddFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/addfeedback", { feedback })
      .then((res) => {
        console.log(res.data);
      });
    Swal.fire({
      title: "Feedback Addded",
      type: "success",
      text: "Sucessfully Feedback Added.",
      confirmButtonColor: "#3bb19b",
      timer: 8500,
    });
    window.location = `/student`;

    console.log(feedback);
  };
  return (
    <div className="feedback">
      <img
        className="imghome1
"
        src="/image/feedback.webp"
        alt=""
        width="1550px"
        height="745px"
      />
      <div className="feedbackmain">
        <div className="subfeedback">
          <form>
            <div>
              {" "}
              <label>
                <h1 className="addfeedback">Add Your Fedback</h1>
              </label>
              <br />
            </div>
            <div>
              {" "}
              <textarea
                type="text "
                name={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Add Feedback"
              ></textarea>
            </div>
            <div>
              {" "}
              <button
                className="btn btn-dark  center mt-5"
                onClick={(e) => add(e)}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
