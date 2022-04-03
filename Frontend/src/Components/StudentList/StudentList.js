/*import React from "react";
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
        <img
        src="/image/20220302_133836.jpg"
        alt=""
        width="1515px"
        height="1150px"
      />
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
       
      </MDBRow>
    </div>
  );
}*/
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export default function App() {
return (
	<>

<div className='blok'>
<Row   className="row-cols-2 row-cols-md-3 g-2    ">
  
    <Col >
<Card style={{
          
          backgroundColor: "#d5bff9",
        }}>
    
     
     <Link to={`/studentList/${6}`}>
 
                <img className='slist'
         src="/image/six.png" />
               </Link>
            
    
   </Card>
  </Col>
   <br/>

   <Col>

  <Card style={{
          
          backgroundColor: "#d5bff9",
        }}>
     
     
    <Link to={`/studentList/${7}`}>
               <img className='slist'
        src="/image/seven.png" />
              </Link>

   
  </Card>
  </Col>

  <br/>

<Col>



<Card style={{
          
          backgroundColor: "#d5bff9",
        }}>
     
  
 <Link to={`/studentList/${8}`}>
            <img className='slist'
     src="/image/eight.png" />
           </Link>


</Card>
</Col>

  <br />

  
  <Col>
  <Card  style={{
          
          backgroundColor: "#d5bff9",
        }}>
     
    <Link to={`/studentList/${9}`}>
               <img className='slist'
        src="/image/nine.png" />
              </Link>

   
  </Card>
  </Col>
  
</Row></div>

<img className='slist'
        src="/image/—Pngtree—flowers behind 3d frame on_1162813.png"
        alt=""
        width="1520px"
        height="700px"
      />
	</>
);
}
