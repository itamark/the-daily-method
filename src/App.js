import React, { Component } from 'react';
import './App.css';
import Calendar from './calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Calendar />
        </section>
      </div>
    );
  }
  // componentDidMount(){
  //   fetch('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index')
  //   .then(data => data.text())
  //   .then(console.log)
  // }
}

export default App;
