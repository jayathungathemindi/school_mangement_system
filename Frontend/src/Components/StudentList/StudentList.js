import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import "./StudentList.css";
export default function App() {
  return (
    <>
      <div className="contrains">
        <img
          className="scl
"
          src="/image/School teacher explaining geography lesson.jpg"
          alt=""
          width="1550px"
          height="1000px"
        />
        <div className="mainstudent">
          <div className="substudentlist">
            <Row className="row-cols-3 row-cols-md-3 g-3    ">
              <Col>
                <Card
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Link to={`/studentList/${6}`}>
                    <img className="slist" src="/image/six.png" />
                  </Link>
                </Card>
              </Col>
              <br />

              <Col>
                <Card
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Link to={`/studentList/${7}`}>
                    <img className="slist" src="/image/seven.png" />
                  </Link>
                </Card>
              </Col>

              <br />

              <Col>
                <Card
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Link to={`/studentList/${8}`}>
                    <img className="slist" src="/image/eight.png" />
                  </Link>
                </Card>
              </Col>

              <br />

              <Col>
                <Card
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Link to={`/studentList/${9}`}>
                    <img className="slist" src="/image/nine.png" />
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
