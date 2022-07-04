import { PropTypes } from 'prop-types';
import { StyledStatistics } from './Styled';

function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage,
}) {
  return (
    <StyledStatistics>
      <ul className="stats">
        <li>
          <span className="feedback-title">Good</span>
          <span className="value">{good}</span>
        </li>
        <li>
          <span className="feedback-title">Neutral</span>
          <span className="value">{neutral}</span>
        </li>
        <li>
          <span className="feedback-title">Bad</span>
          <span className="value">{bad}</span>
        </li>
        <li>
          <span className="feedback-title">Total</span>
          <span className="value">{total}</span>
        </li>
        <li>
          <span className="feedback-title">Positive feedback</span>
          <span className="value">{positivePercentage() ?? 0}%</span>
        </li>
      </ul>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
