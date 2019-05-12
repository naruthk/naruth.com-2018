import React, { Component } from 'react'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
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
        className: 'linkedin',
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/naruthkongurai',
      }
    ]

    return (
      <div className="links">
      
        <ul className="icons-list">
          {topMenu.map((item, index) => {
            return <li key={item.name + '-' + index} className="icon"><a href={item.href} title={item.name} rel="noreferrer">{item.name}</a></li>
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
                  title={item.name}
                  rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', `${item.className}`]} size="lg" />
                </a>
              </li>
            )
          })}
          <li className="icon">
            <a 
              href="https://www.twitter.com/naruthkongurai"
              target="_blank" 
              title="Twitter"
              rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg"/>
            </a>
          </li>
        </ul>
        
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">GatsbyJS</a>
        </div>
        <div className="small">
          &copy; 2019. Naruth Kongurai
        </div>
      </div>
    )
  }
}

export default Links