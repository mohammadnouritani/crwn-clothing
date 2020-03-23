import React from 'react';
import './App.css';
import HomePage from './pages/homepage.comonent';
class App extends React.Component {
  constructor() {
    super();
    this.state = { hello: 'hello world' }
  }
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }

}

export default App;
