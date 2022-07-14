import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/flag?mode=edit" element={<FlagEdit />} />
      <Route path="/flag?mode=create" element={<FlagCreate />} />


    </Routes>
  );
}

export default App;
