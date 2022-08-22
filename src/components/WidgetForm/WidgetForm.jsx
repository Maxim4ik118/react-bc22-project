import React from 'react';
import s from '../TeacherForm/TeacherForm.module.css';
import { Button, Paper } from 'components';
import { useState } from 'react';

const WidgetForm = ({ title = '', label = '', onSubmit }) => {
  const [formData, setFormData] = useState({ name: '' });

  const checkSubmitAbility = state => {
    // ['qw', "123", "12", "44", "", "6"] // false
    // ['qw', "123", "12", "44", "123", "123"] // true
    return !Object.values(state).every(value => value.length >= 2);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({ name: '' });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData.name);

    reset();
  };

  const isEnabledButton = checkSubmitAbility(formData);
  return (
    <Paper className={s.paper}>
      <h3 className={s.title}>{title}</h3>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <input
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            className={s.input}
            placeholder={label}
            type="text"
            required
          />
        </label>
        <Button
          className={s.submitBtn}
          name="Добавить"
          type="submit"
          disabled={isEnabledButton}
        />
      </form>
    </Paper>
  );
};

export default WidgetForm;
