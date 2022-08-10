import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Paper.module.css';

function Paper({ children, className, ...restProps }) {
  return (
    <div className={cn(s.paper, className)} {...restProps}>
      {children}
    </div>
  );
}
Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
