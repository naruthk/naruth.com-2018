import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Section from '../components/Section';

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Naruth Kongurai</span>
        </h5>

        <h3 className="bold">
          Graduate of University of Washington in 2018 with experience in <span className="popup-skills" data-info="Sketch, Adobe Photoshop, Adobe XD, Figma, Invision">designing</span> and building <span className="popup-skills" data-info="JavaScript, React, Node.JS, PHP, Express, MongoDB, GraphQL, Wordpress, Chrome Extension">web</span> and <span className="popup-skills" data-info="iOS, Android, Swift, Kotlin, Java, Google Firebase, Google APIs, AWS Incognito, Genymotion, Flutter, React Native">mobile</span> apps for a leading food company and multiple Seattle startups.
        </h3>

        <ExperienceSection />
        <ProjectsSection />

        <hr />

        <Section title="Areas of Specialities">
          <blockquote>I specialize in building web and mobile apps using <span className="bold">JavaScript, React, Node.JS, PHP, Swift, Java, Kotlin, Express, MongoDB, GraphQL, and Wordpress.</span></blockquote>
          <blockquote>I sometimes do design work with <span className="bold">Sketch, Adobe Photoshop, and Adobe XD.</span></blockquote>
          <blockquote>I also love ❤️ playing video games and watching soccer</blockquote>
        </Section>

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

export default IndexPage
