import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About2 from "./about2";

function useParams1() {
  return (
    <div>
      <Router>
        <h2>Languages</h2>
        <ul>
          <li><Link to="/english">English</Link></li>
          <li><Link to="/spanish">Spanish</Link></li>
          <li><Link to="/french">French</Link></li>
          <li><Link to="/german">German</Link></li>
        </ul>
        <Routes>
          <Route path="/:id" element={<About2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default useParams1;
