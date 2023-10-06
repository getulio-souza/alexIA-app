import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//my pages
import Home from "../components/home-page/home";
import Chatbot from "../components/chatbot/chatbot";
import KnowMore from "../components/know-more/knowMore";
import Plans from "../components/plans/plans"
import BasicPlan from "../components/plans/basic/basicPlan";
import Contact from "../components/contact/contact";
import Newcreditcard from "../components/newcreditcard/newcreditcard";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/chatBot-demo" element={<Chatbot/>} />  
        <Route path="/knowMore" element={<KnowMore/>} />  
        <Route path="/plans" element={<Plans/>} />  
        <Route path="/plans/basic" element={<BasicPlan/>} />  
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newcreditcard" element={<Newcreditcard/>} />
      </Routes>
    </Router>
  )
}

export default MyRoutes;
