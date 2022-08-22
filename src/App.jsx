import { useState } from 'react';

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

const App = () => {
  const [cities, setCities] = useState(
    universityData?.cities.map(city => ({ text: city, relation: Forms.CITY_FORM })) ?? []
  );
  const [departments, setDepartments] = useState(
    universityData?.department.map(({ name }) => ({ text: name, relation: Forms.DEPARTMENTS_FORM })) ?? []
  );
  const [tutors, setTutors] = useState(universityData?.tutors ?? []);
  const [showForm, setShowForm] = useState(null);

  const addTeacher = teacher => {
    setTutors(prevState => [...prevState, teacher]);
  };
  const addCity = cityName => {
    const newCity = {
      text: cityName,
    };

    if (
      !cities.some(
        city => city.text.toLowerCase() === newCity.text.toLowerCase()
      )
    ) {
      setCities(prevState => [...prevState, newCity]);
    } else {
      alert(`${newCity.text} is already exist`);
    }
  };

  const addDepartment = departmentName => {
    const newDepartment = {
      text: departmentName,
    };

    if (
      !departments.some(
        department =>
          department.text.toLowerCase() === newDepartment.text.toLowerCase()
      )
    ) {
      setDepartments([...departments, newDepartment]);
    } else {
      alert(`${newDepartment.text} is already exist`);
    }
  };

  const handleShowForm = formName => {
    setShowForm(prevState => (prevState === formName ? null : formName));
  };

  const handleDeleteCard = (id, relation) => {
    relation === Forms.DEPARTMENTS_FORM &&
      setDepartments(departments.filter(el => el.text !== id));
    relation === Forms.CITY_FORM && setCities(cities.filter(el => el.text !== id));
  };

  const handleEditCard = () => {};

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
                локальных и иностранных компаний и можем вам это дать. А еще мы
                постоянно совершенствуем наши курсы программирования, добавляя
                туда что-то новое. Вы можете лично ознакомиться с историями
                успеха наших выпускников, чтобы убедиться в эффективности нашей
                методики обучения. Да, мы начнем с азов и самой простой
                информации. Знаем, что большинство людей приходят к нам с
                нулевыми знаниями.{' '}
              </p>
            </Paper>
          </div>
        </Section>

        <Section title="Преподаватели" img={teacherImp}>
          <TutorsList tutors={tutors} />
          {showForm === Forms.TEACHER_FORM && (
            <TeacherForm onSubmit={addTeacher} />
          )}
          <Button
            name={
              showForm === Forms.TEACHER_FORM
                ? 'Закрыть форму'
                : 'Добавить преподавателя'
            }
            onClick={() => handleShowForm(Forms.TEACHER_FORM)}
          />
        </Section>

        <Section title="Города" img={citiesImg}>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            list={cities}
          />
          {showForm === Forms.CITY_FORM && (
            <WidgetForm
              title="Добавление города"
              label="Город*"
              onSubmit={addCity}
            />
          )}
          <Button
            name={
              showForm === Forms.CITY_FORM ? 'Закрыть форму' : 'Добавить город'
            }
            onClick={() => handleShowForm(Forms.CITY_FORM)}
          />
        </Section>

        <Section title="факультеты" img={facultiesImg}>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            list={departments}
          />
          {showForm === Forms.DEPARTMENTS_FORM && (
            <WidgetForm
              title="Добавление филиала"
              label="Филиал*"
              onSubmit={addDepartment}
            />
          )}
          <Button
            name={
              showForm === Forms.DEPARTMENTS_FORM
                ? 'Закрыть форму'
                : 'Добавить факультет'
            }
            onClick={() => handleShowForm(Forms.DEPARTMENTS_FORM)}
          />
        </Section>
      </Main>
    </div>
  );
};

export default App;
