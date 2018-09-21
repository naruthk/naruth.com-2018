import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Navigation from '../components/Navigation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faNewspaper, faEnvelope, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faUser, faNewspaper, faEnvelope, faArrowLeft, faArrowRight)

import './style.scss'

import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'

class TemplateWrapper extends React.Component {

  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteKeywords = get(this, 'props.data.site.siteMetadata.keywords')
    const siteURL = get(this, 'props.data.site.siteMetadata.url')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    const { children } = this.props

    return (
      <div className="template-wrapper">
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'author', content: siteTitle },
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords },
            { property: 'og:url', content: siteURL },
            { property: 'og:title', content: siteTitle },
            { property: 'og:description', content: siteDescription },
          ]}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 }
          ]}
        >
          <html lang="en" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {/* <script src="/webfont-1.6.26.js" async="" id="webfontloader"></script> */}
        </Helmet>
        <div className="template-wrapper-children">
          <Navigation />
          { children() }
        </div>
      </div>
    )
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        keywords
      }
    }
  }
`
