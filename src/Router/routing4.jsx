import React , {Fragment} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink , Link ,Routes, Route  } from 'react-router-dom';
import Switch from 'react-router-dom';
import About from './about';
import Home from './home';
import Contact from './contact';
import Notfound from './Notfound';


export default function Routing4() {
  const name = "Karim"
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href={`about/${name}`}>About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about/:name" component={<About/>} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
