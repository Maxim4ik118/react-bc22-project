import PropTypes from 'prop-types';
import { GeneralCard } from 'components';
import s from './GeneralCardList.module.css';

const GeneralCardList = ({ list = [] }) => {

  return (
    <div className={s.generalCardWrapper}>
      {list.length > 0 &&
        list.map(({ text }) => {
          return (
            <GeneralCard
              key={text}
              text={text}
            />
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
};

export default GeneralCardList;
