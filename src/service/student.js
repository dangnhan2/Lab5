import axios from "axios";
const getStudent = () => {
  return axios.get("https://student-api-nestjs.onrender.com/students");
};

const postStudent = (name, studentCode, isActive) => {
  return axios.post("https://student-api-nestjs.onrender.com/students", {
    name,
    studentCode,
    isActive,
  });
};

const deleteStudent = (id) => {
  return axios.delete(`https://student-api-nestjs.onrender.com/students/${id}`);
};

const getStudentById = (id) => {
  return axios.get(`https://student-api-nestjs.onrender.com/students/${id}`);
};

const updateStudent = (id, { name, studentCode, isActive }) => {
  return axios.put(`https://student-api-nestjs.onrender.com/students/${id}`, {
    name,
    studentCode,
    isActive,
  });
};

export {
  getStudent,
  postStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
};
