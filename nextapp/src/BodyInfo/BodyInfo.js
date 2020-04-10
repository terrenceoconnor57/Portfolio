import React from 'react';
import './BodyInfo.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";






const BodyInfo = (props) => {
  return (

<div className = 'bodyinfo'>
<h1 className = 'bodyinfop'>Hi, I'm Terrence.</h1>
<p className = 'spec'>IT Specialist/Developer</p>
<ScrollTo>
{({ scroll }) => (
<button className = 'browse' onClick={() => scroll({y: 1000, smooth: true })}>About Me</button>
)}
</ScrollTo>
</div>

)
}


export default BodyInfo;
