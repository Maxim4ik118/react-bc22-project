import React from 'react';
import s from './TeacherForm.module.css';
import { Button, Paper } from 'components';

class TeacherForm extends React.Component {
  state = {
    lastName: '',
    firstName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  checkSubmitAbility = state => {
    // ['qw', "123", "12", "44", "", "6"] // false
    // ['qw', "123", "12", "44", "123", "123"] // true
    return !Object.values(state).every(value => value.length >= 2);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const isEnabledButton = this.checkSubmitAbility(this.state);

    return (
      <Paper className={s.paper}>
        <h3 className={s.title}>Добавление преподавателя</h3>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            <input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
              className={s.input}
              placeholder="Фамилия*"
              type="text"
              required
            />
          </label>
          <label className={s.label}>
            <input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name="firstName"
              className={s.input}
              placeholder="Имя*"
              type="text"
              required
            />
          </label>
          <label className={s.label}>
            <input
              value={this.state.patronymic}
              onChange={this.handleInputChange}
              name="patronymic"
              className={s.input}
              placeholder="Отчество*"
              type="text"
              required
            />
          </label>
          <label className={s.label}>
            <input
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
              className={s.input}
              placeholder="Телефон*"
              type="text"
              required
            />
          </label>
          <label className={s.label}>
            <input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              className={s.input}
              placeholder="Email*"
              type="text"
              required
            />
          </label>
          <label className={s.label}>
            <input
              value={this.state.city}
              onChange={this.handleInputChange}
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
}

export default TeacherForm;
