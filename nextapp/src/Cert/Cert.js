import React from 'react';
import './Cert.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const Cert = (props) => {
  return (

<div className = 'Cert'>
<nav className = 'cards'>
<h1>{props.name}</h1>
<p>{props.paragraph}</p>
<button className = 'cardbtn'>Verify Here</button>
</nav>
</div>

)
}


export default Cert;
