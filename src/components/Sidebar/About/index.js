import React, { Component } from 'react';
import Link from "gatsby-link";

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
          <Link to="/"><div className="image"></div></Link>
        <div className="bio">
          <p>Hello, I am Naruth, a <span className="bold">Full-Stack Developer</span> from Thailand currently making awesome websites and mobile applications!</p>
        </div>
      </div>
    )
  }
}

export default About