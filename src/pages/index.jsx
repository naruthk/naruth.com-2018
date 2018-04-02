import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import Links from '../components/Links';

// Photos
import PhotoWebTemplate from '../assets/images/project-web-free-template.png';
import PhotoColorPicker from '../assets/images/project-js-color-picker.png';
import PhotoDigitalClockTab from '../assets/images/ui-chrome-extension-digital-clock.png';
import PhotoSoccerPyCli from '../assets/images/ui-python-soccer.png';
import PhotoDailyNotesApp from '../assets/images/ui-daily-notes-app.png';
import PhotoSamsungEmailTemplate from '../assets/images/ui-samsung-email.png';
import PhotoSHOWDCMallHomepage from '../assets/images/ui-show-dc-mall.png';
import PhotoDCVoteApp from '../assets/images/ui-mobile-dcvote.png';
import PhotoCSSOnlyInstagram from '../assets/images/ui-codepen-instagram-logo.png';

// CSS Files
import './index.scss';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle, copyright, author } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    const divStyle = { margin: '30px' };

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div id="projects" className="animated pulse finite">

              <Project title="Portfolio Theme" tools="Bootstrap, HTML5, CSS3" url="responsive-html-portfolio-theme" img={PhotoWebTemplate} />

              <Project title="Digital Clock Tab" tools="Chrome Extension" url="chrome-extension-digital-clock" img={PhotoDigitalClockTab} />

              <Project title="Color Picker" tools="Flexbox, JavaScript" url="interactive-color-picker-tool" img={PhotoColorPicker} />

              <Project title="SHOW DC Homepage" tools="CSS, JavaScript" url="show-dc-mall-website" img={PhotoSHOWDCMallHomepage} />

              <Project title="Instagram Logo" tools="CodePen, CSS" url="codepen-instagram-logo" img={PhotoCSSOnlyInstagram} />

              <Project title="Email Template" tools="Foundation, CSS" url="email-template-for-samsung-asia" img={PhotoSamsungEmailTemplate} />

              <Project title="Daily Notes App" tools="Swift, iOS" url="daily-notes-ios-app" img={PhotoDailyNotesApp} />

              <Project title="DC Vote App" tools="Java, Android" url="http://www.cpall.co.th/" img={PhotoDCVoteApp} />

              <Project title="Soccer Fixtures" tools="Python, Command Line Interface" url="https://github.com/naruthk/pcli-liverpool-updates" img={PhotoSoccerPyCli} />

              {/* <Project title="Milo Homepage" tools="CSS, HTML" url="https://milo.co.th/" img={PhotoMiloHomepage} /> */}

              {/* <Project title="Nivea Blogging Section" tools="SiteCore CMS, CSS, JavaScript" url="http://www.nivea.co.th/products/campaigns/ext/th-TH/NIVEA-Oil-In-Lotion" img={PhotoNiveaBlog} /> */}

            </div>
            <div>
              <hr />
              <h1>From the blog</h1>
              {items}
            </div>
          </div>
          <div style={divStyle}>
            <p className="content__inner">
              <hr />
              {copyright}
              <Links data={author} />
            </p>
          </div>
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
          description
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
          linkedin
          codepen
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
