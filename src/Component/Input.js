import { StudentContext } from "../Context/studentProvider";
import { useContext } from "react";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { postStudent } from "../service/student";
const Input = () => {
  const {
    name,
    setStudentName,
    studentCode,
    setStudentCode,
    isActive,
    setChecked,
    setStudents,
    isCheckedItem,
    handleDeleteSelected,
    getStudentFromAPI,
  } = useContext(StudentContext);

  const handleCheck = () => {
    setChecked(!isActive);
  };

  const handleAdd = async () => {
    try {
      let res = await postStudent(name, studentCode, isActive);
      if (res && res.status === 201) {
        setStudents([res]);
        getStudentFromAPI();
        setStudentName("");
        setStudentCode("");
        setChecked(false);
      }
    } catch (error) {
      console.error(
        "Error adding student:",

        error.response ? error.response.data : error.message
      );
    }
  };

  const countCheckedCheckboxes = () => {
    return isCheckedItem.filter(Boolean).length;
  };
  return (
    <>
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
              value={name}
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
              checked={isActive}
              onChange={handleCheck}
            />
          </div>
        </Form>
      </Row>
    </>
  );
};
export default Input;
