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
import universityData from './constants/universityData.json';
import teacherImp from './assets/images/teachers.png';
import citiesImg from './assets/images/cities.png';
import facultiesImg from './assets/images/faculties.png';

class App extends React.Component {
  state = {
    cities: universityData?.cities.map(city => ({ text: city })) ?? [],
    departments:
      universityData?.department.map(({ name }) => ({ text: name })) ?? [],
    tutors: universityData?.tutors ?? [],
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
    this.setState(prevState => ({
      cities: [...prevState.cities, newCity],
    }));
  };

  addDepartment = departmentName => {
    const newDepartment = {
      text: departmentName,
    };
    this.setState(prevState => ({
      departments: [...prevState.departments, newDepartment],
    }));
  };

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
            <TeacherForm onSubmit={this.addTeacher} />
            <Button name="Добавить преподавателя" onClick={() => {}} />
          </Section>

          <Section title="Города" img={citiesImg}>
            <GeneralCardList
              list={this.state.cities}
              openDropMenu={this.openDropMenu}
            />
            <WidgetForm
              title="Добавление города"
              label="Город*"
              onSubmit={this.addCity}
            />
            <Button name="Добавить город" onClick={() => {}} />
          </Section>

          <Section title="факультеты" img={facultiesImg}>
            <GeneralCardList
              list={this.state.departments}
              openDropMenu={this.openDropMenu}
            />
            <WidgetForm
              title="Добавление филиала"
              label="Филиал*"
              onSubmit={this.addDepartment}
            />
            <Button name="Добавить факультет" onClick={() => {}} />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
