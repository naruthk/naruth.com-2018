import React, { Component } from 'react';
import Link from 'gatsby-link';

import './style.scss'

class BlogPostUnit extends Component {
  render() {
    return (
      <div className="blog-post-unit">
        <div className="title bold">
        <Link to={this.props.link}>{this.props.title}</Link>
        </div>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="excerpt">
          {this.props.excerpt}
        </div>
      </div>
    )
  }
}

export default BlogPostUnit
