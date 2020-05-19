import React, {Component} from 'react';
import './Projects.css';


class Projects extends Component {

    render(){





    return(

      <div className = 'allprojects'>
        <h1 className = 'proheader'>Projects</h1>

      <ul className = 'listbox'>
      <li className = 'flexitem' onClick = {() => window.open('http://uroedcentral.com')}><div class="ui centered card">
  <div class="image">
    <img src="/uroed.png"/>
  </div>
  <div class="content">
    <a class="header">UroEdCentral</a>
  </div>
</div></li>
<li className = 'flexitem' onClick = {() => window.open('http://tdomusic.com')}><div class="ui centered card">
<div class="image">
<img src="/musicproject.png"/>
</div>
<div class="content">
<a class="header">Music Website</a>
</div>
</div></li>
<li className = 'flexitem' onClick = {() => window.open('http://myphotoblogapp.s3-website-us-east-1.amazonaws.com/')}><div class="ui centered card">
<div class="image">
<img src="/blog.png"/>
</div>
<div class="content">
<a class="header">Photo Blog App</a>
</div>
</div></li>
<li className = 'flexitem' onClick = {() => window.open('http://quizappterrence.s3-website-us-east-1.amazonaws.com/')}><div class="ui centered card">
<div class="image">
<img src="/quizapp.png"/>
</div>
<div class="content">
<a class="header">Javascript Quiz</a>
</div>
</div></li>
</ul>
</div>









    )


  }
}

export default Projects;
