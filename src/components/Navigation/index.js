import React, { Component } from 'react'
import BurgerMenu from 'react-burger-menu';

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
    this.state = {
      currentMenu: 'stack',
      side: 'left'
    };
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    return [
      <a key="0" href="/" className="menu-item"><i className="fa fa-fw fa-home" /><span>Home</span></a>,
      <a key="1" href="/about" className="menu-item"><i className="fa fa-fw fa-smile-o" /><span>About</span></a>,
      <a key="2" href="/blog" className="menu-item"><i className="fa fa-fw fa-newspaper-o" /><span>Blog</span></a>,
      <a key="3" href="/contact" className="menu-item"><i className="fa fa-fw fa-envelope-o" /><span>Contact</span></a>
    ];
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();

    const closeButton = (<a className="close-menu"><i className="fa fa-fw fa-times" /></a>)

    let jsx;

    if (this.state.side === 'right') {
      jsx = (
        <MenuWrap wait={20} side={this.state.side}>
          {closeButton}
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
            {closeButton}
            {items}
          </Menu>
        </MenuWrap>
      );
    }

    return jsx;
  }

  render() {
    // const buttons = Object.keys(this.props.menus).map((menu) => {
    //   return (
    //     <a key={menu}
    //       className={classNames({'current-demo': menu === this.state.currentMenu})}
    //       onClick={this.changeMenu.bind(this, menu)}>
    //       {this.props.menus[menu].buttonText}
    //     </a>
    //   );
    // });
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
        <main id="page-wrap">
        </main>
      </div>
    );
  }
}

const menus = {
  slide: {buttonText: 'Slide', items: 1},
  stack: {buttonText: 'Stack', items: 1},
  elastic: {buttonText: 'Elastic', items: 1},
  bubble: {buttonText: 'Bubble', items: 1},
  push: {buttonText: 'Push', items: 1},
  pushRotate: {buttonText: 'Push Rotate', items: 2},
  scaleDown: {buttonText: 'Scale Down', items: 2},
  scaleRotate: {buttonText: 'Scale Rotate', items: 2},
  fallDown: {buttonText: 'Fall Down', items: 2},
  reveal: {buttonText: 'Reveal', items: 1}
};