import React ,{useEffect}from 'react'
import { Routes, Route,useLocation } from "react-router-dom";
import{Navbar, Sidebar} from "./components";
import{
  Home,
  Deal,
  Comic,
  Combo
}from "./pages";
const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navbar />
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deal" element={<Deal />} />
      <Route path="/combo" element={<Combo />} />
      <Route path="/comic" element={<Comic />} />

      </Routes>
    </div>
  );
};

export default App