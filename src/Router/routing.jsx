import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink , Link ,Routes, Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Contact from './contact';
export default function Routing() {
  return (
    <BrowserRouter>
      <div>
        <h1 style={{textAlign:'center'}}>React Router tutorial</h1>
        <ul style={{display:'flex',listStyle:'none'}}>
          <li style={{marginLeft:'4rem'}}><NavLink to='/' exact activeStyle={{color:'red'}}>Home</NavLink></li>
          <li style={{marginLeft:'4rem'}}><NavLink to='/about' exact activeStyle={{color:'green'}}>About</NavLink></li>
          <li style={{marginLeft:'4rem'}}><NavLink to='/contact' exact activeStyle={{color:'blue'}}>Contact</NavLink></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
