import React from "react";
import { Heading, ButtonClass } from './FeedbackOptions.styled';


const  FeedbackOptions = ({ goodFeedback, neutralFeedback, badfeetback }) => {
    return (
        <div>
            <Heading>Please leave feedback</Heading>

            <ButtonClass type="button" onClick={goodFeedback}>Good</ButtonClass>
            <ButtonClass type="button" onClick={neutralFeedback}>Neutral</ButtonClass>
            <ButtonClass type="button" onClick={badfeetback}>Bad</ButtonClass>
            
        </div>
    )};

export default FeedbackOptions;
