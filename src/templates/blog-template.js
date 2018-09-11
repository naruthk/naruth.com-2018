import React from "react";
import Helmet from "react-helmet";
import Links from "../components/Sidebar/Links";
import Link, { push } from 'gatsby-link';
import Img from 'gatsby-image';
import Disqus from 'disqus-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

require("prismjs/themes/prism-tomorrow.css");

import '../pages/style.scss';
import '../components/Sidebar/About/style.scss';
import './style.scss';
import '../components/Sidebar/About';

class BlogPostRoute extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const { next, prev } = this.props.pathContext

    const disqusShortname = 'naruthk';
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };

    return (
      <div className="index">
        <div className="main">
          <div className="mini-header">
            <div className="left">
              <a href="/"><span>Naruth Kongurai</span></a>
            </div>
            <div className="right">
              <a href="/blog">{`View other blog posts`}</a>
            </div>
          </div>
          <div className="blog-post-container">
            <Helmet title={`${post.frontmatter.title}`} />
            <div className="blog-post">
              <h1 class="bold">{post.frontmatter.title}</h1>
              <h4>{post.frontmatter.excerpt}</h4>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          {post.frontmatter.featuredImage && <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
          <p>Photo from <a href="https://www.pexels.com" target="_blank">Pexels</a></p>
        </div>

        <div className="main">
          <div className="blog-post-container">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
            <div className="blog-pagination">
              {next &&
                <Link to={next.frontmatter.path}>
                  <div className="left">
                    <span>Previous</span>
                    <h3>{next.frontmatter.title}</h3>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                  </div>
                </Link>
              }
              {prev &&
                <Link to={prev.frontmatter.path}>
                  <div className="right">
                    <span>Next</span>
                    <h3>{prev.frontmatter.title}</h3>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" />
                  </div>
                </Link>
              }
            </div>
            <div className="comments">
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
      id,
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        featuredImage {
          childImageSharp{
              sizes(maxWidth: 850) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
      }
    }
  }
`;