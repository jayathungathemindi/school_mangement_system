import React, { useEffect, useState } from "react";
import "./Feedback.css";

import axios from "axios";
import "./Feedback.css";

function Feedback() {
  const [feedbacks, setFeedback] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/getfeedback`).then((res) => {
      const feedbacks = res.data.feedback;

      feedbacks.map((feedback) => {
        // setFeedback([...feedbacks, feedback]);
        setFeedback((feedbacks) => [...feedbacks, { feedback: feedback }]);
      });
    });
  }, []);
  console.log(feedbacks);
  return (
    <div>
      <img
        className="scl"
        src="/image/5385893.jpg"
        alt=""
        width="1510px"
        height="730px"
      />
      <div className="mainfeedback">
        <div className="subfeedback">
          {" "}
          {feedbacks.length == 0 ? null : (
            <div>
              {feedbacks.map((feedback) => {
                return (
                  <>
                    *<label>{feedback.feedback.feedback}</label>
                    <br></br>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
