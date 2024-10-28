import { Container } from "react-bootstrap";
import Input from "./Component/Input";
import TableStudent from "./Component/Table";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import StudentInfo from "./Component/StudentInfo";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Input></Input>
                <TableStudent></TableStudent>
              </Container>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
