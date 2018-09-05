import React from 'react'
import Section from '../Section'
import BlogUnit from '../BlogUnit'

class BlogSection extends React.Component {
  render() {

    const { edges: posts } = this.props.postsData;

    return (
      <div>
        <Section>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div key={post.id}>
                  <BlogUnit 
                    title={post.frontmatter.title} 
                    link={post.frontmatter.path}
                    timeperiod={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                  />
                </div>
              );
            })
          }
        </Section>
        
      </div>
    )
  }
}

export default BlogSection