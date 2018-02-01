import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Project = (props) => {
  
  return (
    <div className="tile">
      <a href={props.url} title={props.title} target="_blank">
        <img className="img-responsive" src={props.img} alt={props.title} />
      </a>
      <span className="description">
        <a href={props.url} title={props.title} target="_blank">{props.title}</a>
        <br />
        <span className="tools">{props.tools}</span>
      </span>
    </div>
  )
}

Project.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired
}

export default Project;