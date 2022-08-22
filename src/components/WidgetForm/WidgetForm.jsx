import React from 'react';
import s from '../TeacherForm/TeacherForm.module.css';
import { Button, Paper } from 'components';
import { useState } from 'react';

const WidgetForm = ({title = '', label = ''}) => {
 
const [formData, setFormData ] = useState({name: '',})

  checkSubmitAbility = state => {
    // ['qw', "123", "12", "44", "", "6"] // false
    // ['qw', "123", "12", "44", "123", "123"] // true
    return !Object.values(state).every(value => value.length >= 2);
  };
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);

    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }
  render() {
    const isEnabledButton = this.checkSubmitAbility(this.state);
    const { title = '', label = '' } = this.props;
    return (
      <Paper className={s.paper}>
        <h3 className={s.title}>{title}</h3>
        <form className={s.form} onSubmit={this.onSubmit}>
          <label className={s.label}>
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
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
  }
}

export default WidgetForm;
