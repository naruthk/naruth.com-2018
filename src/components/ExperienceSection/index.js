import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">

          <ExperienceUnit
            cloudinaryImageUrl='experience/dapper-logo'
            colour='#FFFFFF'
            title='Dapper Grooming Inc.'
            link='https://www.dapperseattle.com/'
            timeperiod={<span>Aug 2018 - <span className="present">Present</span></span>}
            subtitle='Lead the web and mobile development team for an early-stage startup looking to reinvent the grooming industry.'
          />
          <ExperienceUnit
            cloudinaryImageUrl='experience/uw-logo'
            colour='#291D4F'
            title='University of Washington'
            link='https://www.uw.edu/'
            timeperiod='Mar 2018 - Jun 2018'
            subtitle='Served as Teaching Assistant, lecturing about Android app development with Kotlin language to a class of 35 students.'
          />
          <ExperienceUnit
            cloudinaryImageUrl='experience/ogilvy-logo'
            colour='#E2001A'
            title='OgilvyOne Worldwide'
            link='https://www.ogilvy.com/'
            timeperiod='Jul 2017 - Sep 2017'
            subtitle='Interned as a Web Developer on email templates, content management systems, and various consumer facing web modules.'
          />
          <ExperienceUnit
            cloudinaryImageUrl='experience/bitsee-logo'
            colour='#FFFFFF'
            title='Bitsee'
            link='https://www.bitsee.ai/'
            timeperiod='Jan 2017 - Mar 2017'
            subtitle='Interned as an Android Developer for an innovative startup utilizing machine learning to create a smart articificial intelligence mobile app.'
          />
          <ExperienceUnit
            cloudinaryImageUrl='experience/cpall-logo'
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
