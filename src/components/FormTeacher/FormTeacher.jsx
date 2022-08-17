import React from 'react';
import s from './FormTeacher.module.css';
import { Button, Paper } from 'components';

function FormTeacher() {
  return (
    <Paper className={s.paper}>
      <h3 className={s.title}>Добавление преподавателя</h3>
      <form className={s.form}>
        <label className={s.label}>
          <input className={s.input} placeholder="Фамилия*" type="text" />
        </label>
        <label className={s.label}>
          <input className={s.input} placeholder="Имя*" type="text" />
        </label>
        <label className={s.label}>
          <input className={s.input} placeholder="Отчество*" type="text" />
        </label>
        <label className={s.label}>
          <input className={s.input} placeholder="Телефон*" type="text" />
        </label>
        <label className={s.label}>
          <input className={s.input} placeholder="Email*" type="text" />
        </label>
        <label className={s.label}>
          <input className={s.input} placeholder="Город*" type="text" />
        </label>
        <Button
          className={s.submitBtn}
          name="пригласить"
          type="submit"
          disabled
        />
      </form>
    </Paper>
  );
}

export default FormTeacher;
