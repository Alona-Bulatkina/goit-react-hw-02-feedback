import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class State extends React.Component {
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

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, value) => total + value, 0);
    };
   
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
      };

    
    render() {
        return (
            <div>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onLeaveFeedback}
                />

                {this.countTotalFeedback() > 0 ? (

                <Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
                ) : (
                    <Notification message="No feedback given" />
                )}
            </div>
        )
    }
}

export default State;