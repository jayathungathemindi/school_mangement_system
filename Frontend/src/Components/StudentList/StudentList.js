import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="container">
      <MDBRow className="row-cols-1 row-cols-md-4 g-5">
        <MDBCol>
          <MDBCard className="w-400   ">
            <img
              src="/image/6thGrade.png"
              alt=""
              width="100px"
              height="100px"
            />
            <MDBCardBody>
              <Link to={`/studentList/${6}`}>
                <button className=" ">Go</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-400  card_Size">
            <img src="/image/7th.png" alt="" width="100px" height="100px" />
            <MDBCardBody>
              <Link to={`/studentList/${7}`}>
                <button className=" ">Go</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-400 card_Size">
            <img src="/image/8th.png" alt="" width="100x" height="100px" />
            <MDBCardBody>
              <Link to={`/studentList/${8}`}>
                <button className=" ">Go</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-400  card_Size">
            <img src="/image/9th.png" alt="" width="100px" height="100px" />
            <MDBCardBody>
              <Link to={`/studentList/${9}`}>
                <button className=" ">Go</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-400  card_Size">
            <img
              src="/image/Grade-10-v2.png"
              alt=""
              width="100px"
              height="100px"
            />
            <MDBCardBody>
              <Link to={`/studentList/${10}`}>
                <button className=" ">Go</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-400  card_Size">
            <img src="/image/plus.png" alt="" width="100px" height="100px" />
            {/* <MDBCardBody>
              <MDBBtn href="#">Go</MDBBtn>
            </MDBCardBody> */}
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
