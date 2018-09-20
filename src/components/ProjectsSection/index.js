import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

// import dailynotesApp from '../../assets/images/projects/daily-notes-app.png'
// import dcvoteApp from '../../assets/images/projects/dc-vote-app.png'
// import showdcWeb from '../../assets/images/projects/show-dc-web.png'
// import niveaWeb from '../../assets/images/projects/nivea-thailand-web.png'
// import digitalclockExtension from '../../assets/images/projects/digital-clock-extension.png'
// import portfoliotemplateWeb from '../../assets/images/projects/portfolio-template-web.png'
// import moviesFinderApp from '../../assets/images/projects/movies-finder-app.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
        <ExperienceUnit
            cloudinaryImageUrl='projects/movies-finder-app'
            // logo={moviesFinderApp}
            colour="#FFFFFF"
            title="Movies Finder App"
            link="https://movies-finder-app.herokuapp.com/"
            timeperiod="2018"
            subtitle="Search and discover the latest movies and TV shows on the Internet."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/show-dc-web'
            // logo={showdcWeb}
            colour="#FFFFFF"
            title="SHOW DC Mall Website"
            link="https://www.showdc.co.th"
            timeperiod="2017"
            subtitle="Designed and built several modules of website for a Thai shopping mall. Used Adobe Photoshop and JavaScript."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/nivea-thailand-web'
            // logo={niveaWeb}
            colour="#FFFFFF"
            title="Nivea Thailand Website"
            link="https://www.nivea.co.th"
            timeperiod="2017"
            subtitle="Designed promotional banners and crafted blog posts for Nivea Thailand. Used Adobe Photoshop and CSS."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/digital-clock-extension'
            // logo={digitalclockExtension}
            colour="#FFFFFF"
            title="Digital Clock Extension"
            link="https://chrome.google.com/webstore/detail/beautiful-digital-clock-w/jdnjafgehddcpoahelddbflpmoeinaed"
            timeperiod="2017"
            subtitle="A useful Chrome extension showing a digital clock. Built with JavaScript and CSS."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/portfolio-template-web'
            // logo={portfoliotemplateWeb}
            colour="#FFFFFF"
            title="Portfolio HTML5 Template"
            link="https://github.com/naruthk/web-theme-portfolio"
            timeperiod="2017"
            subtitle="Ultimate single-page portfolio template featuring an attractive portfolio layout and skills section."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/daily-notes-app'
            // logo={dailynotesApp}
            colour="#FFFFFF"
            title="Daily Notes App"
            link="https://itunes.apple.com/US/app/true/id1299564920"
            timeperiod="2017"
            subtitle="A note-taking app for iOS boasting a minimalistic look and user-friendly interface. Built using Swift."
          />
          <ExperienceUnit
            cloudinaryImageUrl='projects/dc-vote-app'
            // logo={dcvoteApp}
            colour="#FFFFFF"
            title="DC Vote App"
            // link=""
            timeperiod="2016"
            subtitle="A rating app used in 9000 7-Eleven convenience stores in Thailand. Built for Android."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
