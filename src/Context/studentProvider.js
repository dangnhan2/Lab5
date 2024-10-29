import { createContext } from "react";
import { useState } from "react";
import { getStudent } from "../service/student";
const StudentContext = createContext();
function StudentProvider({ children }) {
  const [name, setStudentName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [isActive, setChecked] = useState(false);
  const [students, setStudents] = useState([]);
  const [isCheckedItem, setCheckedItem] = useState([]);

  const handleCheckedItem = (index) => {
    const updatedCheckedState = isCheckedItem.map((item, idx) => {
      return idx === index ? !item : item;
    });
    setCheckedItem(updatedCheckedState);
  };

  const handleDeleteSelected = () => {
    const updatedStudents = students.filter(
      (_, index) => !isCheckedItem[index]
    );

    setStudents(updatedStudents);

    // setCheckedItem(new Array(updatedStudents.length).fill(false));
    console.log(isCheckedItem);
  };

  const getStudentFromAPI = async () => {
    let res = await getStudent();
    if (res && res.data.data) {
      setStudents(res.data.data);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        name,
        setStudentName,
        studentCode,
        setStudentCode,
        isActive,
        setChecked,
        students,
        setStudents,
        isCheckedItem,
        setCheckedItem,
        handleCheckedItem,
        handleDeleteSelected,
        getStudentFromAPI,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
