import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Github from './assets/github.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Calendar />
          <a target="_blank" title="Contribute" href="https://github.com/itamark/the-daily-method"><img className="githubImage" src={Github}></img></a>
        </section>
      </div>
    );
  }
}

export default App;
