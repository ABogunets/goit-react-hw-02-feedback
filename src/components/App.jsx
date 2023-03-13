import React, { Component } from 'react';
import {Statistics} from "components/Statistics/Statistics"
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"

import css from "components/App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    leaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
    };

    countTotalFeedback = () => 
      Object.values(this.state).reduce(
      (total, number) => (total + number),
        0);
    countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()!==0 ? Math.round(this.state.good / this.countTotalFeedback() * 100) : 0;

  render() {
    const options = this.state;

    return (
    <div className={css.container}>
      <h1 className={css.h2}>Please leave feedback</h1>

        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
    </div>
  );
}

}


export default App;