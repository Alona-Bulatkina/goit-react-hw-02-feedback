import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = reviewBtn => {
    this.setState(prevState => ({
      [reviewBtn]: prevState[reviewBtn] + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((total, value) => total + value, 0);
  // };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const namesButtons = Object.keys(this.state);
      return (
          <div>
            <FeedbackOptions
                options={ namesButtons }
                onLeaveFeedback={this.onLeaveFeedback}
              />
                   
            {this.countTotalFeedback() > 0 ? (
                <Statistics 
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
                ) : (
                    <Notification message="No feedback given" />
                )}
          </div>
      );
    }
  }
export default App;