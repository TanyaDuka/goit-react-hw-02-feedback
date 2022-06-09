import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      {buttons.map(button => {
        return (
          <button
            key={button}
            value={button}
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
