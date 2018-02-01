import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import './projects.scss';
import Paper from '../../node_modules/paper/dist/paper-full';

import PhotoWebTemplate from './project-web-free-template.png';
import PhotoColorPicker from './project-js-color-picker.png';
import PhotoDigitalClockTab from './ui-chrome-extension-digital-clock.png';
import PhotoNiveaBlog from './ui-nivea.png';
import PhotoSoccerPyCli from './ui-python-soccer.png';
import PhotoDailyNotesApp from './ui-daily-notes-app.png';
import PhotoSamsungEmailTemplate from './ui-samsung-email.png';
import PhotoMiloHomepage from './ui-milo.png';
import PhotoSHOWDCMallHomepage from './ui-show-dc-mall.png';
import PhotoDCVoteApp from './ui-mobile-dcvote.png';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle, copyright } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            
            <canvas id="home-sketch" resize></canvas>
            
            <div id="projects">
          
              <Project title="Responsive HTML Portfolio Theme" tools="Bootstrap, HTML5, CSS3" url="https://github.com/naruthk/web-theme-portfolio" img={PhotoWebTemplate} />

              <Project title="Interactive Color Picker" tools="Flexbox, JavaScript" url="https://codepen.io/naruthk/full/LzMwWJ/" img={PhotoColorPicker} />

              <Project title="Digital Clock New Tab" tools="Chrome Extension, JavaScript" url="https://chrome.google.com/webstore/detail/beautiful-digital-clock-w/jdnjafgehddcpoahelddbflpmoeinaed?hl=en-US&gl=US" img={PhotoDigitalClockTab} />

              <Project title="Nivea Blogging Section" tools="SiteCore CMS, CSS, JavaScript" url="http://www.nivea.co.th/products/campaigns/ext/th-TH/NIVEA-Oil-In-Lotion" img={PhotoNiveaBlog} />

              <Project title="Liverpool Soccer Fixtures" tools="Python, CLI" url="https://github.com/naruthk/pcli-liverpool-updates" img={PhotoSoccerPyCli} />

              <Project title="Daily Notes App" tools="Swift, iOS" url="https://itunes.apple.com/us/app/daily-notes-distraction-free/id1299564920?ls=1&mt=8" img={PhotoDailyNotesApp} />

              <Project title="Email Template" tools="Foundation framework, CSS" img={PhotoSamsungEmailTemplate} />

              <Project title="Milo Homepage" tools="CSS, HTML" url="https://milo.co.th/" img={PhotoMiloHomepage} />

              <Project title="DC Vote App" tools="Java, Android" url="http://www.cpall.co.th/" img={PhotoDCVoteApp} />

              <Project title="SHOW DC Homepage" tools="CSS, JavaScript" url="https://www.showdc.co.th/" img={PhotoSHOWDCMallHomepage} />

            </div>
            <div>
              <h1>What I've Written So Far</h1>
              {items}
            </div>
          </div>
          <p className="content__inner">
            <hr />
            {copyright}
          </p>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
