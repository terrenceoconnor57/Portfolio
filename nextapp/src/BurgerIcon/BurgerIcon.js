import React from 'react';
import './BurgerIcon.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const BurgerIcon = (props) => {
  return (

<div onClick={props.burgerClickOn} className = 'burger'>
<p className = 'burgline'>Burg</p>
<p className = 'burgline'>Burg</p>
<p className = 'burgline'>Burg</p>
</div>

)
}


export default BurgerIcon;
