import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    const topMenu = [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'Contact',
        href: '/contact',
      }
    ]
    const bottomMenu = [
      {
        className: 'fa fa-github',
        href: 'https://www.github.com/naruthk',
      },
      {
        className: 'fa fa-twitter',
        href: 'https://www.twitter.com/naruthkongurai',
      },
      {
        className: 'fa fa-linkedin',
        href: 'https://www.linkedin.com/in/naruthkongurai',
      },
      {
        className: 'fa fa-codepen',
        href: 'https://codepen.io/naruthk',
      }
    ]

    return (
      <div className="links">
      
        <ul className="icons-list">
          {topMenu.map((item) => {
            return <li className="icon"><a href={item.href}>{item.name}</a></li>
          })}
        </ul>
        
        <ul className="icons-list">
          {bottomMenu.map((item) => {
            return <li className="icon"><a href={item.href} target="_blank"><i className={item.className}></i></a></li>
          })}
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