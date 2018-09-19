import React, {Component} from 'react'

import './style.scss';

export default class Header extends Component {

  render () {
    return (
      <section id="header">
        <span className="logo"><a href="/">Naruth Kongurai</a></span>
      </section>
      // <div className="left">
      //   <a href="/"><span>Naruth Kongurai</span></a>
      // </div>
      // <div className="right">
      //   {/* <ul className="navigation-list">
      //     <li><a href="/about">{`About`}</a></li>
      //     <li><a href="/blog">{`Blog`}</a></li>
      //     <li><a href="/contact">{`Contact`}</a></li>
      //   </ul> */}
      // </div>
    )
  }
}
