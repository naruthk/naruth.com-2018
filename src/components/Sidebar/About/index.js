import React, { Component } from 'react';
import Link, { push } from "gatsby-link";
import Section from '../../Section';

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Link to="/"><div className="image">
        </div></Link>
        <div className="bio">
          {/* A technology enthusiast &amp; huge fan of Apple products who also loves traveling, likes sushi, and watches Premier League soccer. */}
          {/* <div className="nav">
            <h3 onClick={ () => push('/blog')}>Blog</h3>
            <h3 onClick={ () => push('/contact')}>Contact</h3>
          </div> */}
          {/* <Section> */}
            <p>A <span className="bold">frontend developer</span> great at utilizing React to create awesome projects.</p>
            <p>Also interested in cloud computing, Node.JS, Express, MongoDB, GraphQL, Amazon AWS, Heroku.</p>
          {/* </Section> */}
        </div>
      </div>
    )
  }
}

export default About