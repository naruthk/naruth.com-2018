import React, { Component } from 'react';
import Link from 'gatsby-link';

import './style.scss'

class BlogPostUnit extends Component {
  render() {
    return (
      <div className="blog-post-unit">
        <div className="title">
          <Link to={this.props.link}><h2>{this.props.title}</h2></Link>
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
