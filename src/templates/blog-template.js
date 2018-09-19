import React from "react";
import Helmet from "react-helmet";
import Links from "../components/Sidebar/Links";
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Disqus from 'disqus-react';

import Header from '../components/Header'

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

    const { title, excerpt, featuredImage, imageCredit, date } = post.frontmatter;

    return (
      <div className="index">
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={excerpt} />
          <meta name="description" content={excerpt} />
        </Helmet>

        <div className="main">
          <Header />
          <div className="blog-post-container">
            <div className="blog-post">
              <h1 class="bold">{title}</h1>
              <h4>{excerpt}</h4>
            </div>
          </div>
        </div>
        
        <div className="hero-full-screen">
          {featuredImage && <Img sizes={featuredImage.childImageSharp.sizes} />}
          {imageCredit && <p>Photo from {imageCredit}</p>}
        </div>

        <div className="main">
          <div className="blog-post-container">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="blog-pagination">
              {next &&
                <Link to={next.frontmatter.path}>
                  <div className="left">
                    <span>Previous</span>
                    <h3>{next.frontmatter.title}</h3>
                    <i className="fa fa-fw fa-arrow-left" />
                  </div>
                </Link>
              }
              {prev &&
                <Link to={prev.frontmatter.path}>
                  <div className="right">
                    <span>Next</span>
                    <h3>{prev.frontmatter.title}</h3>
                    <i className="fa fa-fw fa-arrow-right" />

                  </div>
                </Link>
              }
            </div>
            <section id="comments">
              <h3>Have your say</h3>
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </section>
          </div>
        </div>
        <div className="aside">
          <div className="top">
            <div className="about">
              <Link to="/"><div className="image">
              </div></Link>
              <div className="bio">
                <p>Updated on {date}</p>
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
        imageCredit
      }
    }
  }
`;