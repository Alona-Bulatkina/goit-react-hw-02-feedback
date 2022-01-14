import React from "react";
import { HeadingStat, Reviews } from './Statistics.styled';
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <HeadingStat>Statistics</HeadingStat>

            <Reviews>Good: {good}</Reviews>
            <Reviews>Neatral: {neutral}</Reviews>
            <Reviews>Bad: {bad}</Reviews>
            <Reviews>Total: {total}</Reviews>
            <Reviews>Positive feedback: {positivePercentage}</Reviews>

        </div>
)};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
  };

export default Statistics;