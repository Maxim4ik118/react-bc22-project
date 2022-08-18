import React from 'react';

import {
  Sidebar,
  Main,
  TutorsList,
  UniversityCard,
  Paper,
  Section,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from './components';
import * as Forms from './constants/vars';
import universityData from './constants/universityData.json';
import teacherImp from './assets/images/teachers.png';
import citiesImg from './assets/images/cities.png';
import facultiesImg from './assets/images/faculties.png';

class App extends React.Component {
  state = {
    cities:
      universityData?.cities.map(city => ({
        text: city,
        relation: 'cities',
      })) ?? [],
    departments:
      universityData?.department.map(({ name }) => ({
        text: name,
        relation: 'departments',
      })) ?? [],
    tutors: universityData?.tutors ?? [],
    showForm: null,
  };

  openDropMenu = () => {};

  addTeacher = teacher => {
    this.setState(prevState => ({
      tutors: [...prevState.tutors, teacher],
    }));
  };

  addCity = cityName => {
    const newCity = {
      text: cityName,
    };

    if (
      !this.state.cities.some(
        city => city.text.toLowerCase() === newCity.text.toLowerCase()
      )
    ) {
      this.setState(prevState => ({
        cities: [...prevState.cities, newCity],
      }));
    } else {
      alert(`${newCity.text} is already exist`);
    }
  };

  addDepartment = departmentName => {
    const newDepartment = {
      text: departmentName,
    };
    if (
      !this.state.departments.some(
        department =>
          department.text.toLowerCase() === newDepartment.text.toLowerCase()
      )
    ) {
      this.setState(prevState => ({
        departments: [...prevState.departments, newDepartment],
      }));
    } else {
      alert(`${newDepartment.text} is already exist`);
    }
  };

  handleShowForm = formName => {
    this.setState(prevState => ({
      showForm: prevState.showForm === formName ? null : formName,
    }));
  };

  handleDeleteCard = (id, relation) => {
    this.setState(prevState => ({
      [relation]: prevState[relation].filter(el => el.text !== id),
    }));
  };

  handleEditCard = () => {};

  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main>
          <Section title="Информация о университете" position="right">
            <div className="universityContainer">
              <UniversityCard universityName={universityData.name} />
              <Paper>
                <p className="universityDescription">
                  Опыт, концентрат знаний и возможность избежать большинство
                  ошибок при приеме на работу. Мы знаем, что хотят большинство
                  локальных и иностранных компаний и можем вам это дать. А еще
                  мы постоянно совершенствуем наши курсы программирования,
                  добавляя туда что-то новое. Вы можете лично ознакомиться с
                  историями успеха наших выпускников, чтобы убедиться в
                  эффективности нашей методики обучения. Да, мы начнем с азов и
                  самой простой информации. Знаем, что большинство людей
                  приходят к нам с нулевыми знаниями.{' '}
                </p>
              </Paper>
            </div>
          </Section>

          <Section title="Преподаватели" img={teacherImp}>
            <TutorsList tutors={this.state.tutors} />
            {this.state.showForm === Forms.TEACHER_FORM && (
              <TeacherForm onSubmit={this.addTeacher} />
            )}
            <Button
              name={
                this.state.showForm === Forms.TEACHER_FORM
                  ? 'Закрыть форму'
                  : 'Добавить преподавателя'
              }
              onClick={() => this.handleShowForm(Forms.TEACHER_FORM)}
            />
          </Section>

          <Section title="Города" img={citiesImg}>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              onEditCard={this.handleEditCard}
              list={this.state.cities}
              openDropMenu={this.openDropMenu}
            />
            {this.state.showForm === Forms.CITY_FORM && (
              <WidgetForm
                title="Добавление города"
                label="Город*"
                onSubmit={this.addCity}
              />
            )}
            <Button
              name={
                this.state.showForm === Forms.CITY_FORM
                  ? 'Закрыть форму'
                  : 'Добавить город'
              }
              onClick={() => this.handleShowForm(Forms.CITY_FORM)}
            />
          </Section>

          <Section title="факультеты" img={facultiesImg}>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              onEditCard={this.handleEditCard}
              list={this.state.departments}
            />
            {this.state.showForm === Forms.DEPARTMENTS_FORM && (
              <WidgetForm
                title="Добавление филиала"
                label="Филиал*"
                onSubmit={this.addDepartment}
              />
            )}
            <Button
              name={
                this.state.showForm === Forms.DEPARTMENTS_FORM
                  ? 'Закрыть форму'
                  : 'Добавить факультет'
              }
              onClick={() => this.handleShowForm(Forms.DEPARTMENTS_FORM)}
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
