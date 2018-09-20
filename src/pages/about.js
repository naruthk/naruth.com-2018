import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Section from  '../components/Section'
import Header from '../components/Header'

import './style.scss'

import fullScreenImage from '../assets/images/full-width-photo.jpeg'

export default class AboutPage extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`About - ${siteTitle}`} />

        <div className="main">
          <Header />
          <section>
            <h3 className="bold">About</h3>
            <h4 className="subtitle">I'm a frontend developer based in Seattle, Washington.</h4>
            <p>I enjoy putting time into developing complex, user-friendly applications that are challenging to design and develop. When I'm not coding, prototyping or reading about technology, you'll find me walking my dog, watching Premier League soccer or listening to songs in my wonderful set of Spotify playlists.</p>
          </section>
        </div>

        <div className="hero-full-screen">
          <img src={fullScreenImage} />
        </div>

        <div className="main">

          <Section title="Background">
            <p>I specialize primarily in creating React applications. Occasionally I also do basic frontend work using HTML5, CSS3, JavaScript.I’ve completed many technical internships over the course of my academic career.</p>
            <p>At OgilvyOne Worldwide, I took graphic designs that clients like Samsung and Nivea created and turned them into fully functional websites.</p>
            <p>At a Seattle-based startup called Bitsee, I collaborated with some of the most smartest folks I’ve ever known. Together we were developing an Android application that searches for and discover videos from around the world.</p>
            <p>I also created an Android mobile application to allow employees a convenient way to conduct employee reviews and gather results. That was for a large corportation in Thailand called Charoen Phokpand (CP All).</p>
            <p>I graduated from University of Washington in 2018 with B.A. in Communications, and have completed internships with a leading Thailand food company, an ads agency and multiple US-based (Seattle) startups.</p>
            <p>I'm currently residing in the United States and <span className="bold">is actively searching for a job!</span></p>
          </Section>

          <Section title="Top Achievements">
            <ul>
              <li>5 technical internship experiences (part-time and full-time) prior to graduating in June 2018</li>
              <li>9000+ 7-Eleven stores in Thailand are using my mobile app I created when I was an intern</li>
              <li>Teaching Assistant in Informatics 448: Android Mobile Development. Mentored and helped 4 students received a full-time job offer.</li>
              <li>1 iOS app on the App Store: Daily Notes-Distraction Free note-taking app</li>
            </ul>
          </Section>

          <Section title="Areas of Specialities">
            <ul>
              <li>Programming using languages like JavaScript, Java, Python, Kotlin, Swift, PHP, HTML, CSS/SCSS/LESS, SQL, R</li>
              <li>Getting dirty and having fun while using React.js, Express.js, MongoDB, GraphQL, Node.js</li>
              <li>Designingwork in Sketch, Adobe Photoshop, and Adobe XD.</li>
              <li>Finding joy in making iOS, Android, React Native apps</li>
              <li>Speaking Thai as a native language and fluent English</li>
            </ul>
          </Section>

        </div>
        
        <div className="hero-full-screen">
          <img src={fullScreenImage} />
        </div>

        <div className="main">
          <Section>
            <h3>Longer Version</h3>
            <h4>Here's a longer, more descriptive narrative about me.</h4>
            
            <p>I grew up in Bangkok, Thailand, and spent my childhood years there until I moved to the Seattle, Washington USA in 2014 to attend the University of Washington. Ever since then, I’ve grown a passion for travelling, going as far north as Alaska and Canada, as far as South as Cancun, Mexico, and as far as east of the United States as New York City. Everywhere I visit I often collect Starbucks cards (I emptied out the balance, of course) and also bought souvenirs here and there.</p>

            <p>I also love to sample and taste wine. They’re extremely expensive, for someone like me as a university student to afford. But I enjoy working part-time (been doing it since freshman year) on the university’s campus and earn enough money to travel the world, find and taste good wines, and buy tech products I wish for.</p>

            <p>I once thought of becoming a doctor! But that dream was crushed the moment I failed the medical entrance examination for one of Thailand’s leading medical school. Who knew…maybe I would have gone on to practice medicine instead of becoming a programmer!</p>

            <p>Soccer (or football from where I come from) is my heart and soul for entertainment. I support Liverpool FC, arguably one of Europe’s best soccer team. Here in Seattle, I joined the LFC Seattle Supporter group where they meet every once in a while to watch matches together.</p>

            <p>:)</p>
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