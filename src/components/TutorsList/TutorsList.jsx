import s from './TutorsList.module.css';
import PropTypes from 'prop-types';
import { Paper } from 'components';
import phoneIcon from '../../assets/images/phone.svg';
import mailIcon from '../../assets/images/mail.svg';
import pinIcon from '../../assets/images/pin.svg';

function TutorsList({ tutors }) {
  return (
    <div>
      {tutors.map(tutor => {
        return <TutorItem key={tutor.phone} {...tutor} />;
      })}
    </div>
  );
}

function TutorItem({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) {
  return (
    <Paper className={s.tutor} style={{ display: 'flex' }}>
      <div className={s.tutorCol}>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{patronymic}</span>
      </div>
      <div className={s.tutorCol}>
        <span>
          <img src={phoneIcon} alt={'phone'} /> {phone}
        </span>
        <span>
          <img src={mailIcon} alt={'mail'} />
          {email}
        </span>
        <span>
          <img src={pinIcon} alt={'pin'} />
          {city}
        </span>
      </div>
      <div className={s.tutorCol}>
        <p>{options}</p>
      </div>
    </Paper>
  );
}

export default TutorsList;
