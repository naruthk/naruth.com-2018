import React, { Component } from 'react';
import Link from "gatsby-link";

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
          <Link to="/"><div className="image"></div></Link>
        <div className="bio">
          <p>Hello, I'm a <span className="bold">Full-Stack Developer</span> in Thailand currently looking for opportunites across Southeast Asia and the United States.</p>
        </div>
      </div>
    )
  }
}

export default About