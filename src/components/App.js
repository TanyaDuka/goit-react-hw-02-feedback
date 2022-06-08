import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttons = ['good', 'neutral', 'bad'];

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  onNewFeedback = event => {
    if (event.currentTarget.value === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (event.currentTarget.value === 'neutral') {
      this.setState(prevValue => ({
        neutral: prevValue.neutral + 1,
      }));
    }

    if (event.currentTarget.value === 'bad') {
      this.setState(prevValue => ({
        bad: prevValue.bad + 1,
      }));
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title={'Please leave feed back'}>
          <FeedbackOptions
            buttons={this.buttons}
            onLeaveFeedback={this.onNewFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          )}
        </Section>
      </>
    );
  }
}
