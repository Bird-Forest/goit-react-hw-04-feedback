import { Statistics } from './Statistics/StatisticsFB';
import { Section } from './Section/SectionFB';
import { Notification } from './Notification/Notification';
import { Wrapper, Button } from './FeedbackOptions/ButtonFB.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotal) * 100);
  };
  const countTotal = onLeaveFeedback();
  const countPositive = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <Wrapper>
          <Button
            onClick={() => {
              setGood(good + 1);
            }}
          >
            Good
          </Button>
          <Button
            onClick={() => {
              setNeutral(neutral + 1);
            }}
          >
            Neutral
          </Button>
          <Button
            onClick={() => {
              setBad(bad + 1);
            }}
          >
            Bad
          </Button>
        </Wrapper>
      </Section>
      <Section title="Statistics">
        {countTotal > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            positivePercentage={countPositive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
