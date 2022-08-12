// import cn from 'classnames';
import { Paper } from 'components';
import s from './GeneralCard.module.css';
import dots from '../../assets/images/dots.svg';
import PropTypes from 'prop-types';

export default function GeneralCard({ text, openDropMenu }) {
  return (
    <Paper className={s.container}>
      <p className={s.text}>{text}</p>
      <button type="button" className={s.btn_drop} onClick={openDropMenu}>
        <img src={dots} alt="dots-menu" className={s.btn_icon} />
      </button>
    </Paper>
  );
}

GeneralCard.propTypes = {
  text: PropTypes.string.isRequired,
  openDropMenu: PropTypes.func.isRequired,
};
