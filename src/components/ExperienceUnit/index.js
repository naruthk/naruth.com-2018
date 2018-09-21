import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';

import './style.scss'

class ExperienceUnit extends Component {

  render() {

    const imageUrl = 'https://res.cloudinary.com/naruthk/image/upload/c_scale,w_350,dpr_auto/naruthk.com/' + this.props.cloudinaryImageUrl + '.jpg'
    
    return (
      <LazyLoad height={200}>
      <div className="experience-unit col-xs-12 col-sm-6 col-md-4">
          <a 
            href={this.props.link} 
            target="_blank" 
            title={this.props.title}
            rel="noreferrer">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundColor: this.props.colour
              }}>
              <span>{this.props.title}</span>
            </div>
          </a>
          <div className="title">
            {this.props.title}
          </div>
          <div className="time-period">
            {this.props.timeperiod}
          </div>
          <div className="subtitle">
            {this.props.subtitle}
          </div>
      </div>
        </LazyLoad>
    )
  }
}

export default ExperienceUnit
