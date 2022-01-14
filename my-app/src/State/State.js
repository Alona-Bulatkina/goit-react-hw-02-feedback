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

    goodFeedback = () => {};
    neutralFeedback = () => {};
    badfeetback = () => {}
    
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
                    goodFeedback={this.goodFeedback}
                    neutralFeedback={this.neutralFeedback}
                    badfeetback={this.badfeetback}
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