import React, {Component} from 'react'

import './style.scss';

export default class Header extends Component {

  render () {
    // const siteName = this.props.data.site.siteMetadata.title;

    return (
      <section id="header">
        <span className="logo"><a href="/">Naruth Kongurai</a></span>
      </section>
    )
  }
}

// export const componentFragment = graphql`
//   fragment headerComponentFragment on Menu {
//     site {
//       siteMetadata {
//         globalMenu {
//           name
//           iconName
//           href
//         }
//         socialMenu {
//           className
//           name
//           href
//         }
//       }
//     }
//   }
// `;

// export const pageQuery = graphql`
//   query test {
//     site {
//         siteMetadata {
//             title
//             description
//         }
//     }
//   }
// `;