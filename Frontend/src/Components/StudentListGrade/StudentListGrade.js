import React from 'react'
import Table from 'react-bootstrap/Table';

function StudentListGrade() {
  return (
    <div className='contrains'>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Register-ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Birthday</th>
      <th>Gender</th>

      <th>Address</th>
      <th>Grade</th>
      <th>Name of Trustee</th>
      <th>NIC</th>
      <th>phone-number</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
     
    </tr>
    <tr>
    <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
     
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default StudentListGrade