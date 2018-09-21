import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';

import './style.scss'

class Banner extends Component {

  render() {
    const BASE_URL = 'https://res.cloudinary.com/naruthk/image/upload/c_scale,w_750,dpr_auto/naruthk.com/general/'
    
    return (
      <div className="hero-full-screen">
        <LazyLoad height={200}>
          {this.props.cloudinaryImageUrl ? (
            <img alt="Banner" src={BASE_URL + this.props.cloudinaryImageUrl + '.jpg'} />
          ) : (
            <div className="banner-background-wrapper"></div>
          )}
        </LazyLoad>
      </div>
    )
  }
}

export default Banner

          {/* <img alt="Banner" src={BASE_URL + 'full-width-photo-half-height.jpg'} /> */}