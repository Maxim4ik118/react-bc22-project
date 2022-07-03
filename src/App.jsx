import React from 'react';

import {
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from './components';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const {
      target: { name, value },
    } = event;

    this.setState({ [name]: Number.parseInt(value) + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    const showStatistics = this.countTotalFeedback() > 0;

    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good,
              bad,
              neutral,
            }}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {showStatistics ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
