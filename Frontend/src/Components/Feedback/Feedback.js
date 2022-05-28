import React, { useEffect, useState } from "react";

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
    <div className="feedback">
      <div>
        {" "}
        {feedbacks.length == 0 ? null : (
          <div>
            {feedbacks.map((feedback) => {
              return (
                <>
                  <li>{feedback.feedback.feedback}</li>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;
