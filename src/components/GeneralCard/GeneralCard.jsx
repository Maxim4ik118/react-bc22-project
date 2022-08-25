// import cn from 'classnames';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import { Paper } from 'components';
import s from './GeneralCard.module.css';
import dots from '../../assets/images/dots.svg';
import { ReactComponent as EditSvg } from '../../assets/images/edit.svg';
import { ReactComponent as RemoveSvg } from '../../assets/images/delete.svg';
import { useCallback } from 'react';

export default function GeneralCard({
  text,
  id,
  onEditCard,
  onOpenDetails,
  withDetails = false,
  onDeleteCard,
  relation,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); // true => false
  };

  const handleKeyDown = useCallback(e => {
    // #fe32f2f3 -> #fe32f2f3 -> #fe32f2f3 -> #fe32f2f3
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isMenuOpen]);

  return (
    <Paper className={s.container}>
      <p className={s.text}>{text}</p>
      <button
        data-modal-btn
        type="button"
        className={s.btn_drop}
        onClick={toggleMenu}
      >
        <img src={dots} alt="dots-menu" className={s.btn_icon} />
      </button>
      {isMenuOpen && (
        <div className={s.menuModal} data-modal>
          {withDetails ? (
            <button
              type="button"
              className={s.menuModal_content}
              onClick={() => onOpenDetails(id)}
            >
              <EditSvg className={s.menuModal_icon} /> подробности
            </button>
          ) : (
            <button
              type="button"
              className={s.menuModal_content}
              onClick={() => onEditCard(id, relation)}
            >
              <EditSvg className={s.menuModal_icon} /> редактировать
            </button>
          )}
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
