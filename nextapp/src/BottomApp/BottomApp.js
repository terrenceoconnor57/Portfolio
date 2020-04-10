import React from 'react';
import './BottomApp.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const BottomApp = (props) => {
  return (

<div className = 'bottom'>
<nav className = 'left'>
<h1 className = 'btmhead'>About Me</h1>
<p className = 'btmp'>The Material Design color system helps
 you apply color to your UI in a meaningful way. In this system,
  you select a primary and a secondary color to represent your brand.
   Dark and light variants of each color can then be applied to your
   UI in different ways.</p>
   </nav>
   <div className = 'btmpad'>
   <nav className = 'me'  />
   </div>
</div>

)
}


export default BottomApp;
