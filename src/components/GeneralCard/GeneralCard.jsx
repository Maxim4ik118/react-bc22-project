// import cn from 'classnames';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { Paper } from 'components';
import s from './GeneralCard.module.css';
import dots from '../../assets/images/dots.svg';
import { ReactComponent as EditSvg } from '../../assets/images/edit.svg';
import { ReactComponent as RemoveSvg } from '../../assets/images/delete.svg';

export default function GeneralCard({
  text,
  id,
  onEditCard,
  onDeleteCard,
  relation,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <Paper className={s.container}>
      <p className={s.text}>{text}</p>
      <button type="button" className={s.btn_drop} onClick={handleOpenMenu}>
        <img src={dots} alt="dots-menu" className={s.btn_icon} />
      </button>
      {isMenuOpen && (
        <div className={s.menuModal}>
          <button
            type="button"
            className={s.menuModal_content}
            onClick={() => onEditCard(id, relation)}
          >
            <EditSvg className={s.menuModal_icon} /> редактировать
          </button>
          <button
            type="button"
            className={s.menuModal_content}
            onClick={() => onDeleteCard(id, relation)}
          >
            <RemoveSvg className={s.menuModal_icon} /> удалить
          </button>
        </div>
      )}
    </Paper>
  );
}

GeneralCard.propTypes = {
  text: PropTypes.string.isRequired,
  onEditCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};
