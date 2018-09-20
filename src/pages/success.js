import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Header from '../components/Header'
import Banner from '../components/Banner'

import './style.scss'


export default class ContactSuccess extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`Contact - ${siteTitle}`} />

        <div className="main">
          <Header />
          <h3 className="bold">I've got your response!</h3>
          <h4>Thank you so much. I will get back to you as soon as possible.</h4>
        </div>

        
        <Banner />

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
  query ContactSuccessPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`;