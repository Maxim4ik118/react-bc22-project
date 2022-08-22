import { useState } from 'react';
import s from './TeacherForm.module.css';
import { Button, Paper } from 'components';

const TeacherForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ lastName: '', firstName: '', patronymic: '', phone: '', email: '', city: '' })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({
      ...prevState, [name]: value,
    }));
  };

  const checkSubmitAbility = state => {
    // ['qw', "123", "12", "44", "", "6"] // false
    // ['qw', "123", "12", "44", "123", "123"] // true
    return !Object.values(state).every(value => value.length >= 2);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  const isEnabledButton = checkSubmitAbility(formData);

  return (
    <Paper className={s.paper}>
      <h3 className={s.title}>Добавление преподавателя</h3>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <input
            value={formData.lastName}
            onChange={handleInputChange}
            name="lastName"
            className={s.input}
            placeholder="Фамилия*"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <input
            value={formData.firstName}
            onChange={handleInputChange}
            name="firstName"
            className={s.input}
            placeholder="Имя*"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <input
            value={formData.patronymic}
            onChange={handleInputChange}
            name="patronymic"
            className={s.input}
            placeholder="Отчество*"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <input
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            className={s.input}
            placeholder="Телефон*"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <input
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            className={s.input}
            placeholder="Email*"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <input
            value={formData.city}
            onChange={handleInputChange}
            name="city"
            className={s.input}
            placeholder="Город*"
            type="text"
            required
          />
        </label>
        <Button
          className={s.submitBtn}
          name="пригласить"
          type="submit"
          disabled={isEnabledButton}
        />
      </form>
    </Paper>
  );
}

export default TeacherForm;
