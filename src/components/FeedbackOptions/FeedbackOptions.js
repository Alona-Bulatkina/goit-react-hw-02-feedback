import React from "react";
import { Heading, ButtonClass } from './FeedbackOptions.styled';
import PropTypes from "prop-types";

const  FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        <Heading>Please leave feedback</Heading>
            {options.map(option => (
                <ButtonClass type="button" key={option} onClick={()=> onLeaveFeedback(option)}>
                    {option}
                </ButtonClass>
        ))}
    </>
    );

    FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
      };

export default FeedbackOptions;
