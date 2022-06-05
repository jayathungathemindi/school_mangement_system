import React, { useState } from "react";
import "./FileUpload.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const FileUpload = React.memo(() => {
  const [data, setdata] = useState({
    // grade: "",
    filename: "",
    file: "",
  });
  const { grade } = useParams();

  function submit(e) {
    e.preventDefault();
    console.log("hello");

    const formData = new FormData();

    formData.append("grade", grade);
    formData.append("filename", data.filename);
    formData.append("document", data.file);
    formData.append("tid", localStorage.getItem("id"));

    axios
      .post("http://localhost:3000/documents", formData, grade)

      .then((res) => {
        console.log(res.data);
      });

    window.location = `/teacher`;
  }
  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    setdata({ ...data, file: e.target.files[0] });
  };
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  return (
    <div class="mainn">
      <img
        className="scl"
        src="/image/quiz.jpg"
        alt=""
        width="1530px"
        height="745px"
      />

      <div className="subb">
        <from>
          <div>
            {" "}
            <h1 className="titleupload">File Upload</h1>{" "}
          </div>
          <div>
            {" "}
            <label for="filename">
              {" "}
              <h4>File Name</h4>
            </label>
            <input
              onChange={(e) => handle(e)}
              id="filename"
              value={data.filename}
              type="text"
              placeholder="FileName"
              name="Filename"
              required
            ></input>
          </div>
          <br></br>
          <div className="fileupload">
            <img
              src="/image/upload-file.png"
              alt=""
              width="130px"
              height="100px"
            />
            <input
              type="file"
              placeholder="Upload Document"
              filename="file"
              onChange={onChangeFile}
            />
          </div>

          {/* <div>
            <label for="filename">
              <h4>Grade</h4>
            </label>
            <p></p>
            <select
              onChange={(e) => handle(e)}
              id="grade"
              value={data.grade}
              type="grade"
            >
              <option value="">Select</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div> */}
          <br></br>
          <button
            className="btn btn-primary btn-block"
            onClick={(e) => submit(e)}
          >
            submit
          </button>
        </from>
      </div>
    </div>
  );
});
export default FileUpload;
