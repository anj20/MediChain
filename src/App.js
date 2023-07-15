import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctorlist from "./components/Doctorlist";
import { Routes, Route } from "react-router-dom";
import Adddoctor from "./components/Adddoctor";
import Searchdoc from "./components/Searchdoc";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctorlist" element={<Doctorlist />} />
        <Route path="/adddoctor" element={<Adddoctor />} />
        <Route path="/getdoctor" element={<Searchdoc />} />
      </Routes>
    </>
  );
}

export default App;
