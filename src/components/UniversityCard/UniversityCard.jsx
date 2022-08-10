import { Paper } from '../index';
import mockUniversityIcon from '../../assets/images/mockUniversity.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';

function UniversityCard({ universityName, onEdit, onDelete }) {

  return (
    <Paper>
      <div>
        <img src={mockUniversityIcon} alt={universityName}/>
        <span>университет</span>
        <h3>{universityName}</h3>
        <div>
          <button onClick={onEdit}><img src={editIcon} alt={"Edit"}/></button>
          <button onClick={onDelete}><img src={deleteIcon} alt={"Delete"}/></button>
        </div>
      </div>
    </Paper>
  );
}

export default UniversityCard;
