import React from 'react'

const Service = ({icon, title, text}) => {
  return (
    <article className="service">
        <span className="service-icon">
            <i className={icon}></i>
        </span>
        <div className="service-info">
            <h4>{title}</h4>
        </div>
        <div className="service-text">
            <p>{text}</p>
        </div>
    </article>
  );
};

export default Service