import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import '@morph-ui/core/morph-1.9.9.css'
import Header from './component/Header';

class App extends Component {
  state = {
    name: 'Nefi',
    data:[]
  }

  changeName = () => {
    const nombre = 'Estefano';
    this.setState({
      name: nombre
    });
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <Header
            title={this.state.name}
            color="black" />
        </div>
        <button onClick={this.changeName}>
          Change Name
      </button>
      </Fragment>
    );
  }
}

export default App;
