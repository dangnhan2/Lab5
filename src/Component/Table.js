import { useContext, useEffect } from "react";
import { StudentContext } from "../Context/studentProvider";
import { Row, Button, Form, Table } from "react-bootstrap";
import { getStudent, deleteStudent } from "../service/student";
import { useNavigate } from "react-router-dom";
const TableStudent = () => {
  const {
    students,
    isCheckedItem,
    setCheckedItem,
    handleCheckedItem,
    getStudentFromAPI,
  } = useContext(StudentContext);

  const navigate = useNavigate();

  const handleDelete = async (studentIndex) => {
    // setStudents(students.filter((student, index) => index !== studentIndex));
    let res = await deleteStudent(studentIndex);
    // console.log(res);
    if (res && res.status === 200) {
      getStudentFromAPI();
    }
  };

  useEffect(() => {
    setCheckedItem(new Array(students.length).fill(false));
  }, [students]);

  useEffect(() => {
    getStudentFromAPI();
  }, []);

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
              <td onClick={() => navigate(`/student/${student._id}`)}>
                {student.name}
              </td>
              <td>{student.studentCode}</td>
              <td>
                {student.isActive ? (
                  <Button variant="primary">Active</Button>
                ) : (
                  <Button variant="danger">In-active</Button>
                )}
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(student._id)}
                >
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
