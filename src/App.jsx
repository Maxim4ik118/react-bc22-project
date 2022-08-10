import React from 'react';

import { Sidebar, Main, TutorsList, UniversityCard } from './components';
import universityData from './constants/universityData.json';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Sidebar />
        <Main>
          <UniversityCard universityName={universityData.name} />
          <TutorsList tutors={universityData.tutors} />
        </Main>
      </div>
    );
  }
}

export default App;
