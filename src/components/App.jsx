import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/ButtonFB';
import { Statistics } from './Statistics/StatisticsFB';
import { Section } from './Section/SectionFB';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotal = this.countTotalFeedback();
    let goodFB = this.state.good;
    return Math.round((goodFB / countTotal) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const countTotal = this.countTotalFeedback();
    const countPositive = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotal > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotal}
              positivePercentage={countPositive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
