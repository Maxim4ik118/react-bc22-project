import s from './Paper.module.css';
import PropTypes from 'prop-types';

function Paper({ children, className, ...restProps }) {
  return (
    <div className={`${s.paper} ${className}}`} {...restProps}>
      {children}
    </div>
  );
}
Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
