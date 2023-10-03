import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//my pages
import Home from "../components/home-page/home";
import KnowMore from "../components/know-more/knowMore";
import Plans from "../components/plans/plans"
import Contact from "../components/contact/contact";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/knowMore" element={<KnowMore/>} />  
        <Route path="/plans" element={<Plans/>} />  
        <Route path="/contact" element={<Contact/>} />  
      </Routes>
    </Router>
  )
}

export default MyRoutes;
