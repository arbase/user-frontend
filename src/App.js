import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
