import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink , Link ,Routes, Route  } from 'react-router-dom';
import Switch from 'react-router-dom';
import About from './about';
import Home from './home';
import Contact from './contact';
import Notfound from './Notfound';


export default function Routing2() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact 1</Link></li>
        </ul>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Notfound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
