import React, { useEffect } from "react";
import "./Home.css";
import Typed from "react-typed";
import "../../App.css";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = React.memo(() => {
  return (
    <>
      <div className="Home">
        <div className="main-info">
          <div>
            <h2>Online School Management System</h2>
          </div>
          <div>
            <Typed
              className="typed-text"
              strings={["Integrity,Honesty,Trust,Compassion"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>

          <h3>Hiriwadunna M.V</h3>
        </div>

        <img
          className="imghome1
"
          src="/image/—Pngtree—student book advertising background_970588.jpg"
          alt=""
          width="1551px"
          height="630px"
        />
        <br />
        <br />
        <div className="mission">
          <div className="stafftext">
            <h1>Our Staff </h1>
          </div>{" "}
          <br />
        </div>
      </div>

      <div className="contrainjs">
        <Row className="row-cols-4 row-cols-md-4 g-12 ">
          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher1.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Jayanthi Annadurai</h5>
                  </p>
                </div>
                <p>
                  Middle School History and Social Studies
                  <br />
                  MEd Ohio State University
                  <br />
                  B.A. Ohio State University.
                </p>
              </Card.Text>
            </Card>
          </Col>
          <br />

          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher2.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Pablo Arancibia</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>

          <br />

          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher4.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Eve Bonneau</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>

          <br />
          <br />

          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher6.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Chasz Cameron</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="row-cols-4 row-cols-md-4 g-12 ">
          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher3.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Benjamin Bourlange</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>
          <br />

          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher9.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Tom Canright</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>

          <br />
          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC",
              }}
            >
              <img
                className="slist"
                src="/image/teacher8.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Felix Amankona-Diawuo</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>

          <br />
          <Col>
            <Card
              style={{
                backgroundColor: "#DCDCDC	",
              }}
            >
              <img
                className="slist"
                src="/image/teacher7.jpg"
                width="360px"
                height="350px"
              />

              <Card.Text>
                <div className="admin">
                  <p>
                    <h5>Calvin Brock</h5>
                  </p>
                </div>
                <p>
                  {" "}
                  B.A. Carleton College
                  <br />
                  M.S. Northwestern University
                  <br />
                  Ph.D. Northwestern University.
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <br />
        <div className="scllogo">
          <img
            src="/image/logo.png"
            alt=""
            width="180px"
            height="150px"
            class="scllog"
          />
        </div>
      </div>
      <br />
      <div className="footer">
        <br />
        <div className="about">
          <br />
          <h2>About</h2>
          <br />
          <p>
            Our mission is to change the way education meets the future to
            foster interdisciplinary, integrated thinking and innovative
            leadership; to engage fully in the global community and to
            facilitate lifelong learning
          </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>

          <table>
            <tr>
              <td> School </td>
              <td>:</td>
              <td> </td>
              <td>011 2235678</td>
            </tr>
            <tr>
              <td> Summer </td>
              <td>:</td>
              <td> </td>
              <td>011 23456789</td>
            </tr>
            <tr>
              <td> Tennis </td>
              <td>:</td>
              <td> </td>
              <td>011 2232456</td>
            </tr>
            <tr>
              <td>Email </td>
              <td>:</td>
              <td> </td>
              <td>hnvOnlineducation@gmail.com</td>
            </tr>
          </table>

          <br />
        </div>
      </div>
    </>
  );
});

export default Home;
