import React from 'react';

import { Section, Sidebar, Main, Paper, TutorsList } from './components';
import universityData from './constants/universityData.json';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main>
          <Paper>
            <p>text</p>
          </Paper>
          <TutorsList tutors={universityData.tutors} />
        </Main>
      </div>
    );
  }
}

export default App;
