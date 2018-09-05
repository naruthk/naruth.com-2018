import React, { Component } from 'react';
import Link, { push } from "gatsby-link";
import styled from "styled-components";

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Link to="/"><div className="image">
        </div></Link>
        <div className="bio">
          A technology enthusiast &amp; huge fan of Apple products who also loves traveling, likes sushi, and watches Premier League soccer.
          <div className="nav">
            <h3 onClick={ () => push('/blog')}>Blog</h3>
            <h3 onClick={ () => push('/uses')}>Uses</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About