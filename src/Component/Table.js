import { useContext, useEffect } from "react";
import { StudentContext } from "../Context/studentProvider";
import { Row, Button, Form, Table, Nav } from "react-bootstrap";
import { getStudent } from "../service/student";
import { useNavigate } from "react-router-dom";
const TableStudent = () => {
  const navigate = useNavigate();
  const {
    students,
    setStudents,
    isCheckedItem,
    setCheckedItem,
    handleCheckedItem,
  } = useContext(StudentContext);

  const handleDelete = (studentIndex) => {
    setStudents(students.filter((student, index) => index !== studentIndex));
  };

  useEffect(() => {
    setCheckedItem(new Array(students.length).fill(false));
  }, [students]);

  useEffect(() => {
    getStudentFromAPI();
  }, []);

  const getStudentFromAPI = async () => {
    let res = await getStudent();
    if (res && res.data.data) {
      setStudents(res.data.data);
    }
  };
  return (
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
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  checked={isCheckedItem[index]}
                  onChange={() => handleCheckedItem(index)}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.studentCode}</td>
              <td>
                {student.isActive ? (
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
  );
};
export default TableStudent;
