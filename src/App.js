import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Table,
} from "react-bootstrap";
import { useState, useEffect } from "react";
function App() {
  const [studentName, setStudentName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [students, setStudents] = useState([
    {
      studentName: "Nguyen Van A",
      studentCode: "CODE12345",
      isChecked: true,
    },
    {
      studentName: "Tran Van B",
      studentCode: "CODE67890",
      isChecked: false,
    },
  ]);
  const [isCheckedItem, setCheckedItem] = useState([]);

  const value = {
    studentName,
    studentCode,
    isChecked,
  };

  const handleAdd = () => {
    setStudents([...students, value]);
    setStudentName("");
    setStudentCode("");
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  const handleDelete = (studentIndex) => {
    setStudents(students.filter((student, index) => index !== studentIndex));
  };

  useEffect(() => {
    setCheckedItem(new Array(students.length).fill(false));
  }, [students]);

  const handleCheckedItem = (index) => {
    const updatedCheckedState = isCheckedItem.map((item, idx) => {
      return idx === index ? !item : item;
    });
    setCheckedItem(updatedCheckedState);
    // console.log(updatedCheckedState);
  };

  const countCheckedCheckboxes = () => {
    return isCheckedItem.filter(Boolean).length;
  };

  const handleDeleteSelected = () => {
    const updatedStudents = students.filter(
      (_, index) => !isCheckedItem[index]
    );
    //console.log(updatedStudents);
    setStudents(updatedStudents);
    // Reset the isCheckedItem array after deletion
    // setCheckedItem(new Array(updatedStudents.length).fill(false));
    console.log(isCheckedItem);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Total selected student: {countCheckedCheckboxes()} </h2>
        </Col>

        <Col>
          <Button onClick={handleDeleteSelected}>Clear</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Student Name"
              aria-label="Student Name"
              aria-describedby="basic-addon1"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col>
          <Button onClick={handleAdd}>Add</Button>
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Student Code"
              aria-label="Student Code"
              aria-describedby="basic-addon1"
              value={studentCode}
              onChange={(e) => setStudentCode(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Form>
          <div key="default-checkbox" className="mb-3">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Still Active"
              checked={isChecked}
              onChange={handleCheck}
            />
          </div>
        </Form>
      </Row>

      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Select</th>
              <th>Student Name</th>
              <th>Student Code</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label=""
                  onChange={() => setChecked(true)}
                />
              </td>
              <td>Nhan</td>
              <td>QE180096</td>
              <td>
                <Button variant="primary">Active</Button>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr> */}

            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label=""
                    checked={isCheckedItem[index]}
                    onChange={() => handleCheckedItem(index)}
                  />
                </td>
                <td>{student.studentName}</td>
                <td>{student.studentCode}</td>
                <td>
                  {student.isChecked ? (
                    <Button variant="primary">Active</Button>
                  ) : (
                    <Button variant="danger">In-active</Button>
                  )}
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
