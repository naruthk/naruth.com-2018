import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Section from  '../components/Section'
import Header from '../components/Header'
import Banner from '../components/Banner'

import './style.scss'

export default class AboutPage extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`About - ${siteTitle}`} />

        <div className="main">
          <Header />
          
          <h3 className="bold">About</h3>

          <Section title="Nice to meet you.">
            <p>I am Naruth Kongurai. I am a Full-Stack Developer!</p>
          </Section>
        </div>

        <Banner />

        <div className="main">

          <Section title="My Personal Story">
            <p>I was born in Bangkok, Thailand. I came to the United States in 2014 to complete my undergraduate study and launch a career in Software Engineering.</p>
            <p>I studied at the University of Washington, earning a Bachelor’s Degree in Communications and also obtaining a Minor in Informatics at the same time in spring of 2018. </p>
            <p>The two fields of academia essentially allow me to understand the inner thinkings of people and the way technology is created so that I can effectively create products that people will absolutely enjoy.</p>
            <p>During university, I was inspired to intern as a Software Developer by many of my friends who were Computer Science majors. I did not realize at the time that this was the kind of working position that I’d fall in love with.</p>
            <p>My first internship began in the summer of 2015 after my sophomore year came to completion. I interned as a software developer for a nationally-renowed corporation in Thailand that operates 7-Eleven convenience stores in the country. </p>
            <p>At this corporation, I was fortunate to be working with inspiring mentors and experienced programmers who led me to be in love with software development as a whole.</p>
            <p>At the end of that internship, I finished creating a mobile application that allows employees of 7-Eleven convenience stores to use QR code reader to fill and submit electronic forms.</p>
          </Section>

        </div>

        <div className="main">

          <h2>"What I accomplished in my first internship was a great selling-point for helping me to land many more successful technical internships while I was studying in university."</h2>

        </div>

        <div className="main">

          <Section>
            <p>During January 2017, I began my internship for a startup called Bitsee that was based in Seattle. With a few other developers, we eventually created a mobile app for searching Twitter’s Vine videos. Unfortunately, Vine was no longer a service a year later.</p>
            <p>What was special about Bitsee was that it was my first ever venture into the startup landscape. When the internship ended, I seriously fell in love with how startups work, especially the idea of doing something unique, fun, and challenging that no one else has really ever done before.</p>
            <p>I wanted to try something fun and inspiring in my last quarter at the university. So I applied and later became a Teaching Assistant and helped out 30 students to successsfuly learn how to create Android mobile apps. And what a fun experience it was, to say the least!</p>
            <p>I graduated from the University of Washington on June 2018, accomplishing a wealth of achievements over the course of a 4-year degree.</p>
          </Section>

          <Section title="And into the present:">
            <p>Now I am currently residing in Bangkok, Thailand, where I continue searching for employment opportunites throughout Southeast Asia and also in the United States of America.</p>
            <p>As a fresh graduate, I have that burning passion and hunger to help startups and large corporations develop innovative, user-friendly products that people can impact their thoughts, interaction, and lives. </p>
            <p>Thank you so much for reading my personal story, and I hope you have a very beautiful day!</p>
            <p>— Naruth Kongurai</p>
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
    );
  }
}

export const pageQuery = graphql`
  query AboutPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`;