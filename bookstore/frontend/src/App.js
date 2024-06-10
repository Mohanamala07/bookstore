import React ,{useEffect}from 'react'
import { Routes, Route,useLocation } from "react-router-dom";
import{Navbar} from "./components";
const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navbar />
      <Routes>

      </Routes>
    </div>
  );
};

export default App