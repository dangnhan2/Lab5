import { useContext } from "react";
import { StudentContext } from "../Context/studentProvider";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
const StudentInfo = () => {
  const { name, isActive } = useParams();
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Status: {isActive}</p>
    </>
  );
};

export default StudentInfo;
