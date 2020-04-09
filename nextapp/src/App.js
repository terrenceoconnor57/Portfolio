import React from 'react';
import { Card, Button, Text } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Cert from './Cert/Cert';





function App() {
  return (
    <div className="App">
      <header className="App-header">


      <nav className = 'links'>

<ul>
<li className = 'sitemain'><a className = 'terrence'>Terrence's Portfolio</a></li>
<li><a className = 'topright'>Home</a></li>
<li><a className = 'topright'>Certifications</a></li>
<li><a className = 'topright'>GitHub</a></li>
</ul>
</nav>
      </header>
      <br/>

    <Cert name = 'AWS' />
    <Cert name = 'Azure'/>

    </div>
  );
}

export default App;
