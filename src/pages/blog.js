import React from 'react'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import BlogPostSection from '../components/BlogSection';


import fullScreenImage from '../assets/images/full-width-photo.jpeg'

import './style.scss'

class BlogPage extends React.Component {
  render() {
  
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`Blog - ${siteTitle}`} />

        <div className="main">
          <Header />
          <h3 className="bold">Blog</h3>
          <BlogPostSection postsData={this.props.data.allMarkdownRemark} />
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

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageQuery {
    site {
        siteMetadata {
            title
        }
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          html
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            excerpt
          }
        }
      }
    }
  }
`;