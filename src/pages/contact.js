import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Breadcrumb from '../components/Breadcrumb'

import './style.scss'

export default class Contact extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`Contact - ${siteTitle}`} />
        <div className="main">
          <Breadcrumb linkTo="Contact" />

          <div className="not-found">
          
            <h3 className="bold">Here's how to reach out to me:</h3>

            <p>I am currently seeking an entry-level software development (web / mobile) position in or near Seattle, Redmond, Los Angeles, and San Francisco.</p>
            
            <p>My email address is <a href="mailto:nkongurai@gmail.com">nkongurai@gmail.com</a>.</p>

            <p>I will promply respond to your message within a day or so!</p>
          </div>

        </div>

        <div className="aside">
          <div className="top">
            <About />
          </div>
          <div className="bottom">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ContactPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`;