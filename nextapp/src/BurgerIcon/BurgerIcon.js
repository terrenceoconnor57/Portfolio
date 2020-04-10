import React from 'react';
import './BurgerIcon.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';







const BurgerIcon = (props) => {
  return (

<button className = 'burger'>
<div className = 'burgline' />
<div className = 'burgline' />
<div className = 'burgline' />
</button>

)
}


export default BurgerIcon;
