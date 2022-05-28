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
      <form>
        <div>
          {" "}
          <label>Add Your Fedback</label>
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
          <button className="btn btn-light" onClick={(e) => add(e)}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedback;
