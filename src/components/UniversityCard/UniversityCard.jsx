import { Paper } from '../index';
import mockUniversityIcon from '../../assets/images/mockUniversity.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import s from './UniversityCard.module.css';

function UniversityCard({ universityName, onEdit, onDelete }) {
  return (
    <Paper>
      <div className={s.container}>
        <img
          className={s.image}
          src={mockUniversityIcon}
          alt={universityName}
          width="80"
        />
        <span className={s.text}>университет</span>
        <h3 className={s.name}>{universityName}</h3>
        <div className={s.thumb}>
          <button className={s.button} onClick={onEdit}>
            <img src={editIcon} alt={'Edit'} />
          </button>
          <button className={s.button} onClick={onDelete}>
            <img src={deleteIcon} alt={'Delete'} />
          </button>
        </div>
      </div>
    </Paper>
  );
}

export default UniversityCard;
