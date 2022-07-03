import React from 'react';

import PropTypes from 'prop-types';

import { StyledFeedbackOptions } from './Styled';

const FeedbackOptions = ({
  options: { good, bad, neutral },
  onLeaveFeedback,
}) => {
  return (
    <StyledFeedbackOptions>
      <button
        type="button"
        className="option-btn"
        name="good"
        value={good}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className="option-btn"
        name="bad"
        value={bad}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
      <button
        type="button"
        className="option-btn"
        name="neutral"
        value={neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
