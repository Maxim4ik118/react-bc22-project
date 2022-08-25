import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Main, Sidebar } from 'components';
import { UniversityPage, DepartmentPage, PageNotFound } from 'pages';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('university');
  }, [pathname, navigate]);

  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Routes>
          <Route path="university" element={<UniversityPage />} />
          <Route path="departments/*" element={<DepartmentPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;

// TODO:
// Перенести state departments на глобальный уровень
//
