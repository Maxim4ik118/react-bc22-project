import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Button.module.css';
import btnIcon from '../../assets/images/add.svg';

export default function Button({ name, onClick, className }) {
  return (
    <button type="button" className={cn(s.button, className)} onClick={onClick}>
      <img src={btnIcon} alt="btnIcon" />
      {name}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
