import React, { Component } from 'react';

// my comp
import Routes from './routes';
import Sidebar from './components/organizms/sidebar';

class App extends Component {
  render() {
    return (
        <div>
          <Sidebar/>
          <Routes/>
        </div>
    );
  }
}

export default App;
