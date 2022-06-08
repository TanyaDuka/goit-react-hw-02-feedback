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
      {good === 0 ? <p></p> : <p>Positive feedback: {percentage}</p>}
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentage: propTypes.number,
};

export default Statistics;
