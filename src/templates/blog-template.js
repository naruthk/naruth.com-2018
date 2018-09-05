import React from "react";
import Helmet from "react-helmet";
import Links from "../components/Sidebar/Links";
import Link, { push } from 'gatsby-link';

require("prismjs/themes/prism-tomorrow.css");

import '../pages/style.scss';
import '../components/Sidebar/About/style.scss';
import './style.scss';
import '../components/Sidebar/About';

class BlogPostRoute extends React.Component {
  render() {

    const post = this.props.data.markdownRemark

    return (
      <div className="index">
        <div className="main">
          <div className="floating-button">
            <a href="/blog">{`Go Back`}</a>
          </div>
          <div className="blog-post-container">
            <Helmet title={`${post.frontmatter.title}`} />
            <div className="blog-post">
              <h1 class="bold">{post.frontmatter.title}</h1>
              <h4>{post.frontmatter.excerpt}</h4>
              <hr />
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </div>
        <div className="aside">
          <div className="top">
            <div className="about">
              <Link to="/"><div className="image">
              </div></Link>
              <div className="bio">
                <p>Updated on {post.frontmatter.date}</p>
                <p>{post.timeToRead} min read</p>
                <div className="nav">
                  <h3 onClick={ () => push('/')}>Home</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <Links />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
          title
      }
    },
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
      timeToRead,
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
      }
    }
  }
`;