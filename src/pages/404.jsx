import React from 'react';
import Sidebar from '../components/Sidebar';
import PlantPic from '../assets/images/plant404.jpeg';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Hmm...</h1>
              <div className="page__body">
                <p><b>The page does not exist.</b> Yikes! Maybe it is under construction? Maybe it never will be? :) But I am sorry for what has happened here.</p>
                <p>Tell me about this on Twitter: <a href="http://www.twitter.com/naruthkongurai" title="Twitter">@naruthkongurai</a>. That will be helpful! Thank you!</p>
                <p><img src={PlantPic} alt="Credit: Pexel" /></p>
                <p>I hope this picture calms your emotions down :)</p>
              </div>
            </div>
          </div>
        </div>
        <Sidebar {...this.props} />
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
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
        }
      }
    }
  }
`;
