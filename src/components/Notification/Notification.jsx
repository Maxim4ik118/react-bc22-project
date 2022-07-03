import React from 'react';

import PropTypes from 'prop-types';

import { StyledNotification } from './Styled';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
