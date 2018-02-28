import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './style.scss';

const Project = (props) => {
  const isOutsideLink = String(props.url).startsWith('http');
  const url = `/${props.url}`;

  const output = (
    <div>
      <img className="img-responsive" src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <h5>{props.tools}</h5>
    </div>
  );

  return (
    <div className="tile">
      { isOutsideLink
          ? <a href={props.url} title={props.title}>{output}</a>
          : <Link to={url}>{output}</Link>
      }
    </div>
  );
};

Project.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired
};

export default Project;
