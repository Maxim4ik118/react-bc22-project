import { Main, Sidebar } from 'components';
import { UniversityPage, DepartmentPage } from 'pages';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main>
        <DepartmentPage />
      </Main>
    </div>
  );
};

export default App;
