import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate, Routes, Route } from 'react-router-dom';
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
import { DepartmentInfo } from 'pages';

function DepartmentPage() {
  const [departments, setDepartments] = useState(
    universityData?.department.map(({ name }) => ({
      text: name,
      relation: Forms.DEPARTMENTS_FORM,
      id: nanoid(),
    })) ?? []
  );

  const navigate = useNavigate();

  const handleDeleteCard = (id, relation) => {
    setDepartments(departments.filter(el => el.id !== id));
  };

  const handleOpenDetails = id => {
    navigate(`/departments/department/${id}`);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <Section title="Факультеты" position="right">
            <GeneralCardList
              onDeleteCard={handleDeleteCard}
              onOpenDetails={handleOpenDetails}
              list={departments}
              withDetails
            />
          </Section>
        }
      />
      <Route path="department/:departmentId" element={<DepartmentInfo />} />
    </Routes>
  );
}

export default DepartmentPage;
