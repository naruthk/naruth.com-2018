import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">

        <ul className="icons-list">
          <li className="icon">
            <a href="/">
              Home
            </a>
          </li>
          <li className="icon">
            <a href="/blog">
              Blog
            </a>
          </li>
          <li className="icon">
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>

        <ul className="icons-list">
          {/* <li className="icon">
            <a href="mailto:nkongurai@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li> */}
          <li className="icon">
            <a href="https://www.github.com/naruthk" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/naruthkongurai" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/naruthkongurai" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://codepen.io/naruthk" target="_blank">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
        <div className="small">
          &copy; 2017-2018 . Naruth Kongurai
        </div>
      </div>
    )
  }
}

export default Links