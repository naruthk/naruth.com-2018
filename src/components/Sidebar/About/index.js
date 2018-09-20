import React, { Component } from 'react';
import Link from "gatsby-link";

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Link to="/"><div className="image">
        <span>Naruth Kongurai</span></div></Link>
        <div className="bio">
          <p><span className="bold">Front End Developer</span> who focuses on writing clean, elegant and reusable code.</p>
        </div>
      </div>
    )
  }
}

export default About