import React, { Component } from 'react';
import { css } from 'glamor';
import { Redirect } from 'react-router-dom';

// my comp
import Routes from './routes';
import Sidebar from './components/organizms/sidebar';
import {checkAuth} from './components/pages/Auth/checkAuth'

let grid_layout = css({
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '1fr 4fr',
  gridGap: '16pt',
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {sidebarWidth: {
      width: "250px"
    }};
  }

  printSidebarWidth(){
    let newWidth = document.getElementById('sidebar').offsetWidth + "px";
    this.setState({
      sidebarWidth: {
        width: newWidth
      }
    })
    
  }

  componentDidMount(){
      this.printSidebarWidth()
  }

  authRouter(){
    
  }

  render() {
    return (
        <div id="content" {...grid_layout}>
          <Sidebar/>
          <div style={this.state.sidebarWidth}><h1>Sidebar Devider</h1></div>
          <Routes/>
        </div>
    );
  }
}

export default App;
