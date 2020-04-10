import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Cert from './Cert/Cert';
import CertHeader from './CertHeader/CertHeader';
import BodyInfo from './BodyInfo/BodyInfo';
import BottomApp from './BottomApp/BottomApp';
import BurgerIcon from './BurgerIcon/BurgerIcon';
import { ScrollTo } from "react-scroll-to";









function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">


      <nav className = 'links'>

<ul>
<li className = 'sitemain'><a className = 'terrence' href = '/'>TO</a></li>
<li className = 'navbar'><a className = 'topright' href = '/'>Home</a></li>
<BurgerIcon className = 'padburg'/>

<li className = 'navbar'><a className = 'topright' href = '/Cert/Cert' >Certifications</a></li>
<li className = 'navbar'><a className = 'topright' href = 'https://github.com/terrenceoconnor57'>GitHub</a></li>
</ul>
</nav>

      </header>

      <br/>

<Route path = "/" exact component = {BodyInfo} />
<Route exact path="/Cert/Cert" component={() => <CertHeader name={`Achieved`}
/>} />
<Route exact path="/Cert/Cert" component={() => <Cert name={`AWS`}
paragraph = {'AWS Certified Solutions Architect'}/>} />
<Route exact path="/Cert/Cert" component={() => <Cert name={`Azure`}
paragraph = {'Azure Fundamentals Certified'}/>} />
<Route exact path="/Cert/Cert" component={() => <CertHeader name={`Working On`}
/>} />
<Route exact path="/Cert/Cert" component={() => <Cert name={`AWS`}
paragraph = {'Developer Certified'}/>} />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Route path = "/" exact component = {BottomApp} />



    </div>

    </BrowserRouter>
  );
}

export default App;
