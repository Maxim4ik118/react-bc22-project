import PropTypes from 'prop-types';
import { GeneralCard } from 'components';
import s from './GeneralCardList.module.css';

const GeneralCardList = ({
  list = [],
  onEditCard = () => {},
  onDeleteCard,
  onOpenDetails = () => {},
  withDetails = false,
}) => {
  return (
    <div className={s.generalCardWrapper}>
      {list.length > 0 &&
        list.map(({ text, relation, id }) => {
          return (
            <GeneralCard
              key={text}
              text={text}
              id={id}
              relation={relation}
              onEditCard={onEditCard}
              onOpenDetails={onOpenDetails}
              onDeleteCard={onDeleteCard}
              withDetails={withDetails}
            />
          );
        })}
    </div>
  );
};

GeneralCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onEditCard: PropTypes.func,
  onOpenDetails: PropTypes.func,
  onDeleteCard: PropTypes.func.isRequired,
  withDetails: PropTypes.bool,
};

export default GeneralCardList;
