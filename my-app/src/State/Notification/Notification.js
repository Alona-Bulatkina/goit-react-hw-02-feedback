import React from "react";
import PropTypes from "prop-types";
import { NoFeedback } from './Notification.styled';

const Notification = ({ message }) => <NoFeedback>{message}</NoFeedback>;

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
    message: PropTypes.string,
  };
export default Notification;