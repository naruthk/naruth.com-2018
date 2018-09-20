import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

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
        className: 'github',
        name: 'GitHub',
        href: 'https://www.github.com/naruthk',
      },
      {
        className: 'twitter',
        name: 'Twitter',
        href: 'https://www.twitter.com/naruthkongurai',
      },
      {
        className: 'linkedin',
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/naruthkongurai',
      },
      {
        className: 'codepen',
        name: 'Codepen',
        href: 'https://codepen.io/naruthk',
      }
    ]

    return (
      <div className="links">
      
        <ul className="icons-list">
          {topMenu.map((item, index) => {
            return <li key={item.name + '-' + index} className="icon"><a href={item.href} title={item.name}>{item.name}</a></li>
          })}
        </ul>

        <ul className="icons-list">
          {bottomMenu.map((item, index) => {
            return (
              <li 
                key={item.name + '-' + index} 
                className="icon">
                <a 
                  href={item.href} 
                  target="_blank" 
                  title={item.name}>
                  <FontAwesomeIcon icon={['fab', `${item.className}`]} size="lg" />
                </a>
              </li>
            )
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