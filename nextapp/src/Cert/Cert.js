import React from 'react';
import './Cert.css'







const Cert = (props) => {
  return (

<div className = 'Cert'>
<nav className = 'cards'>
<h1>{props.name}</h1>
<p>  In 2006, AWS started to offer their Infrastructure as a Service platform to many businesses around the world.
This quickly became known as Cloud computing.
 AWS currently holds 33% of the worldwide market share for cloud service providers.
</p>
<button className = 'cardbtn'>Verify Here</button>
</nav>
</div>

)
}


export default Cert;
