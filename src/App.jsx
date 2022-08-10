import React from 'react';

import {
  Section, Sidebar
} from './components';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Sidebar />
        <main></main>
      </div>
    );
  }
}

export default App;
