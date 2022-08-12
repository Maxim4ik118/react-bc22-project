import { GeneralCard } from 'components';
import React from 'react';
import PropTypes from 'prop-types';

import s from './GeneralCardList.module.css';

export default function GeneralCardList({ list = [], openDropMenu }) {
  return (
    <div className={s.generalCardWrapper}>
      {list.length > 0 &&
        list.map(({ text }) => {
          return (
            <GeneralCard key={text} text={text} openDropMenu={openDropMenu} />
          );
        })}
    </div>
  );
}

GeneralCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openDropMenu: PropTypes.func.isRequired,
};
