import React, { Component } from 'react'
import BurgerMenu from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss';

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;
    if (this.state.hidden) {
      style = {display: 'none'};
    }
    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

export default class Navigation extends Component {
  constructor (props) {
    super(props);
    // Options: slide, stack, elastic, bubble, push, pushRotate, scaleDown, scaleRotate, fallDown, reveal
    this.state = {
      currentMenu: 'stack',
      side: 'left'
    };
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    const globalMenu = [
      {
        name: 'Home',
        iconName: 'home',
        href: '/',
      },
      {
        name: 'About',
        iconName: 'user',
        href: '/about',
      },
      {
        name: 'Blog',
        iconName: 'newspaper',
        href: '/blog',
      },
      {
        name: 'Contact',
        iconName: 'envelope',
        href: '/contact',
      }
    ]
    // const globalMenu = this.props.data.site.siteMetadata.globalMenu;

    return globalMenu.map((menu, index) => {
      return <a key={index} href={menu.href} className="menu-item">
      <FontAwesomeIcon icon={menu.iconName} fixedWidth /><span className="name">{menu.name}</span>
    </a>
    })
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();

    let jsx;

    if (this.state.side === 'right') {
      jsx = (
        <MenuWrap wait={20} side={this.state.side}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
            {items}
          </Menu>
        </MenuWrap>
      );
    } else {
      jsx = (
        <MenuWrap wait={20}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} 
          outerContainerId={'outer-container'}>
            {items}
          </Menu>
        </MenuWrap>
      );
    }

    return jsx;
  }

  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
        <main id="page-wrap">
        </main>
      </div>
    );
  }
}

// export const navigationFragment = graphql`
//   fragment navigationItems on Site {
//     siteMetadata {
//       globalMenu {
//         name
//         iconName
//         href
//       }
//       socialMenu {
//         className
//         name
//         href
//       }
//     }
//   }
// `;

// export const componentQuery = graphql`
//   query NavigationComponent {
//     site {
//       ...navigationItems
//     }
//   }
// `;