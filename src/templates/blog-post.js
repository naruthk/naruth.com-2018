import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <section className="main style1">
                <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
                
                <div className="grid-wrapper">
                    <div className="col-12">
                        <header className="major">
                          <h1>{post.frontmatter.title}</h1>
                        </header>

                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>

                    <div className="col-12">
                        <br />
                        <ul className="actions uniform">
                          <li><a href="/" className="button">Go back home</a></li>
                        </ul>
                    </div>
                </div>
              
            </section>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
