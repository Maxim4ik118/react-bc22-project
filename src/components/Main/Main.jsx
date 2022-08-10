import s from './Main.module.css';
import PropTypes from 'prop-types';

function Main({ children }) {
  return <main className={s.main}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
