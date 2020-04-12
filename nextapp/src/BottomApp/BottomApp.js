import React from 'react';
import './BottomApp.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const BottomApp = (props) => {
  return (

<div className = 'bottom'>
<nav className = 'left'>
<h1 className = 'btmhead'>{props.title}</h1>
<p className = 'btmp'>{props.paragraph}</p>
<p className = 'btmp'>{props.paragraph2}</p>
<p className = 'btmp'>{props.paragraph3}</p>
<p className = 'btmp'>{props.paragraph4}</p>
<p className = 'btmp'>{props.paragraph5}</p>
   </nav>
   <div className = 'btmpad'>
   <nav className = 'me'  />
   </div>
</div>

)
}


export default BottomApp;
