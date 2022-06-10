import React from 'react';
import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  console.log(typeof good);
  return (
    <div className={s.title}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Statistics;
