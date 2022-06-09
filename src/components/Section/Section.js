import React from 'react';
import propTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

export default Section;
