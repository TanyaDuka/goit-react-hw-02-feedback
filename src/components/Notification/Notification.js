import React from 'react';
import propTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <h3 className={s.text}>{message}</h3>;
};

// Notification.defaultProps = {
//     message:'No feedback given'
// }

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
