import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import profilePic from '../../pages/me.png';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    // const { location } = this.props;
    // const { author, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    // const isHomePage = get(location, 'pathname', '/') === '/';
    const { author, menu } = this.props.data.site.siteMetadata;

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <center>
            <img
              src={profilePic}
              className="sidebar__author-photo animated fadeInDown finite"
              width="195"
              height="195"
              alt={author.name}
            />
          </center>
        </Link>
        <h3>Hey, I’m <Link to="/">Naruth Kongurai</Link>,<br />a Front End Web Developer from Bangkok, Thailand.</h3>
        <hr />
        {/* { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        ) :
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        } */}
        {/* <p className="sidebar__author-subtitle">{subtitle}</p> */}
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
