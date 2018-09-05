import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import dapperLogo from '../../assets/images/experience/dapper-logo.jpeg'
import uwLogo from '../../assets/images/experience/uw-logo.jpg'
import ogilvyLogo from '../../assets/images/experience/ogilvy-logo.png'
import bitseeLogo from '../../assets/images/experience/bitsee-logo.png'
import cpallLogo from '../../assets/images/experience/cpall-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={dapperLogo}
            colour='#FFFFFF'
            title='Dapper Grooming Hub'
            link='https://www.dapperseattle.com/'
            timeperiod='Aug 2018 - Present'
            subtitle='Lead 3 development teams (iOS, Android, Web) to design and develop web and mobile apps for an early stage startup.'
          />
          <ExperienceUnit
            logo={uwLogo}
            colour='#291D4F'
            title='University of Washington'
            link='https://www.uw.edu/'
            timeperiod='Mar 2018 - Jun 2018'
            subtitle='Served as Teaching Assistant, lecturing about Android app development with Kotlin language to a class of 35 students.'
          />
          <ExperienceUnit
            logo={ogilvyLogo}
            colour='#E2001A'
            title='OgilvyOne Worldwide'
            link='https://www.ogilvy.com/'
            timeperiod='Jul 2017 - Sep 2017'
            subtitle='Interned as a Web Developer on email templates, content management systems, and various consumer facing web modules.'
          />
          <ExperienceUnit
            logo={bitseeLogo}
            colour='#FFFFFF'
            title='Bitsee'
            link='https://www.bitsee.ai/'
            timeperiod='Jan 2017 - Mar 2017'
            subtitle='Interned as an Android Developer for an innovative startup utilizing machine learning to create a smart articificial intelligence mobile app.'
          />
          <ExperienceUnit
            logo={cpallLogo}
            colour='#FFFFFF'
            title='Charoen Phokpand'
            link='https://www.cpall.co.th/'
            timeperiod='Jul 2016 - Sep 2016'
            subtitle='Interned as a Software Developer on an Android rating application and a PHP-MySQL-based website for viewing rating results.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
