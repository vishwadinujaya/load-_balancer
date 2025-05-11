import React from 'react';
import './Title.css';

const Title = ({subTitle, title, variant = 'default'}) => {
  return (
    <div className={`title ${variant}`}>
      <h1 className="subtitle">{subTitle}</h1>
      <h2 className="main-title">{title}</h2>
    </div>
  )
}

export default Title;
