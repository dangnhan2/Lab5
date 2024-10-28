import { createContext } from "react";
import { useState } from "react";
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
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
