import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
  
    const url=' 	https://api.adviceslip.com/advice/'
   
    axios.get(url)
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
    }

  render() {
    return (
      <div className="App">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Cheer Me Up!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;