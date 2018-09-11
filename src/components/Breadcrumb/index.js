import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class Breadcrumb extends Component {
  render() {
    return (
      <h5><Link to="/" activeStyle={{color: '#0D7EFF', textDecoration: 'none'}}>Home</Link> > <span className="bold">{this.props.linkTo}</span></h5>
    )
  }
}