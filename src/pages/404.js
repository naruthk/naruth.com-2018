import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Header from '../components/Header'

import './style.scss'

export default class NotFoundRoute extends React.Component {
  render() {
    return (
      <div className="index">
        <Helmet title={`404 Page not found`} />
        <div className="main">

          <Header />

          <div className="not-found">
          
            <h3 className="bold">Could not find what you're looking for</h3>

            <p>There is a good chance that this happens because the link you are trying to open is outdated. I am very sorry for any inconvenience.</p>
            <br />
            <h4 className="bold">What else can you do?</h4>
            <p>You can go back to the <a href="/">front page</a> to browse my experiences and see projects I worked on. I also update my <a href="/blog/">blog</a> frequently these days so you can check that out too!</p>
            <ul>
              <li>If you want to, you can report the error to me by sending an <a href="mailto:nkongurai@gmail.com" className="button">email message</a>. Thank you.</li>
            </ul>
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
  query NotFoundRoute {
      site {
          siteMetadata {
              title
          }
      }
  }
`;