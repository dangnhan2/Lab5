import axios from "axios";
const getStudent = () => {
  return axios.get("https://student-api-nestjs.onrender.com/students");
};

const postStudent = (name, studentCode, isActive) => {
  return axios.post(
    "https://student-api-nestjs.onrender.com/students",
    name,
    studentCode,
    isActive
  );
};

// const deleteStudent = (id) => {
//   return axios.delete(`https://student-api-nestjs.onrender.com/students/${id}`);
// };

export { getStudent, postStudent };
