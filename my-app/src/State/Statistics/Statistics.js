import React from "react";
import { HeadingStat, Reviews } from './Statistics.styled';


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

export default Statistics;