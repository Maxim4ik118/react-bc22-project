import { useState } from 'react';
import universityData from '../constants/universityData.json';
import * as Forms from '../constants/vars';
import {
  // TutorsList,
  // UniversityCard,
  // Paper,
  Section,
  // Button,
  GeneralCardList,
  // TeacherForm,
  // WidgetForm,
} from '../components';

function DepartmentPage() {
  const [departments, setDepartments] = useState(
    universityData?.department.map(({ name }) => ({
      text: name,
      relation: Forms.DEPARTMENTS_FORM,
    })) ?? []
  );

  const handleDeleteCard = (id, relation) => {
    setDepartments(departments.filter(el => el.text !== id));
  };

  const handleEditCard = () => {};

  return (
    <>
      <Section title="Факультеты" position="right">
        <GeneralCardList
          onDeleteCard={handleDeleteCard}
          onEditCard={handleEditCard}
          list={departments}
        />
      </Section>
    </>
  );
}

export default DepartmentPage;
