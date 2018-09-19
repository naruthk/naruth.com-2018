import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Breadcrumb from '../components/Breadcrumb'

import './style.scss'

import genericPhoto from '../posts/rawpixel-abstract.jpeg'

export default class ContactSuccess extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`Contact - ${siteTitle}`} />
        <div className="main">
          <Breadcrumb linkTo="Submission Successful" />

          <section>
          
            <h3 className="bold">I've got your response!</h3>

            <img src={genericPhoto} style={{maxWidth: '100%'}} />

            <p>Thank you so much. I will get back to you as soon as possible.</p>

            <p>Have a great rest of your day!</p>
            
          </section>

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
  query ContactSuccessPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`;