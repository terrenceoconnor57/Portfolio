import React from 'react';
import './CertHeader.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const CertHeader = (props) => {
  return (

<div className = 'CertHeader'>
<h1>{props.name}</h1>
<br/>
</div>
)
}


export default CertHeader;
