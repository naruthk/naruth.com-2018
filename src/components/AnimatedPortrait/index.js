// // Modified code originally written LaxisB: https://github.com/LaxisB

// import React, { Component } from 'react'
// import { Spring } from 'react-spring'
// import { man, woman } from '../../utils/portrait-svg-data'
// import './style.scss'

// const data = [{ name: 'HIM', image: man }, { name: 'HER', image: woman }]

// export default class AnimatedPortrait extends Component {

//   state = { 
//     selected: data[0]
//   }

//   select = selected => this.setState({ selected })

//   render() {
//     const selected = this.state.selected

//     return (
//       <div className="hero-full-screen"> 
//       </div>
//     )
//   }
// }

// {/* <div class="portrait-wrapper">
//   <svg className="detail" viewBox="0 0 170 256">
//     {selected.image.map((p, i) => (
//       <Spring key={i} native to={p}>
//         {styles => <animated.path d={styles.d} fill={styles.fill} />}
//       </Spring>
//     ))}
//   </svg>
//   <div className="master">
//     {data.map(o => (
//       <div key={o.name} onClick={e => this.select(o)} className={selected.name === o.name ? 'active' : ''}>
//         {o.name}
//       </div>
//     ))}
//   </div>
// </div> */}