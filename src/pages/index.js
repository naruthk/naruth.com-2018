import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Helmet from 'react-helmet';

import 'font-awesome/css/font-awesome.min.css'
import './style.scss'

export default class IndexPage extends React.Component {

  constructor() {
    super()
  }

  render() {

    const { title, description, keywords } = this.props.data.site.siteMetadata;

    return (
      <div className="index">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keyword" content={keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </Helmet>
        <div className="main">
        
          <div className="mini-header">
            <div className="left">
              <a href="/"><span>Naruth Kongurai</span></a>
            </div>
            <div className="right">
              <a href="/blog">{`Blog`}</a>  |  <a href="/contact">{`Contact`}</a>
            </div>
          </div>

          <h3 className="bold">I <span className="popup-skills" data-info="Sketch, Adobe Photoshop, Adobe XD, Figma, Invision">design</span> and build <span className="popup-skills" data-info="JavaScript, React, Node.JS, PHP, Express, MongoDB, GraphQL, Wordpress, Chrome Extension">web</span> and <span className="popup-skills" data-info="iOS, Android, Swift, Kotlin, Java, Google Firebase, Google APIs, AWS Incognito, Genymotion, Flutter, React Native">mobile</span> apps with emphasis on producing user-friendly and useful products. </h3>
          <h4 className="subtitle"><i className="fa fa-book"></i>I graduated from University of Washington in 2018 with B.A. in Communications, and have completed internships with a leading Thailand food company, an ads agency and multiple US-based (Seattle) startups.</h4>
          <h4 className="subtitle"><i className="fa fa-globe"></i>I'm currently residing in the United States and <span className="bold">is actively searching for a job!</span></h4>

          {/* <h3 className="bold">
            I graduated from the University of Washington in 2018 and have experiences in <span className="popup-skills" data-info="Sketch, Adobe Photoshop, Adobe XD, Figma, Invision">designing</span> and building <span className="popup-skills" data-info="JavaScript, React, Node.JS, PHP, Express, MongoDB, GraphQL, Wordpress, Chrome Extension">web</span> and <span className="popup-skills" data-info="iOS, Android, Swift, Kotlin, Java, Google Firebase, Google APIs, AWS Incognito, Genymotion, Flutter, React Native">mobile</span> apps for a leading food company and multiple Seattle startups.
          </h3> */}

          <br/>

          <ExperienceSection />
          <ProjectsSection />

          <hr />

          {/* <Section title="Areas of Specialities">
            <blockquote>I specialize in building web and mobile apps using <span className="bold">JavaScript, React, Node.JS, PHP, Swift, Java, Kotlin, Express, MongoDB, GraphQL, and Wordpress.</span></blockquote>
            <blockquote>I sometimes do design work with <span className="bold">Sketch, Adobe Photoshop, and Adobe XD.</span></blockquote>
            <blockquote>I also love ❤️ playing video games and watching soccer</blockquote>
          </Section> */}

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
    )
  }
}

export const pageQuery = graphql`
  query HomePageQuery {
    site {
        siteMetadata {
            title
            description
        }
    }
  }
`;