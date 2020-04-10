import React from 'react';
import './SideBurger.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const SideBurger = (props) => {
  return (

<nav className = 'burgside'>
<ul className = 'sidelist'>

<li><a className ='sidecontent' href = '/'>Home</a></li>

<li><a className ='sidecontent' href = '/Cert/Cert' >Certifications</a></li>
<li><a className ='sidecontent' href = 'https://github.com/terrenceoconnor57'>GitHub</a></li>
</ul>
</nav>

)
}


export default SideBurger;
