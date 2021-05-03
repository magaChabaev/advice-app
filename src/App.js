import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((response) => {
        const { advice } = response.slip;
        this.setState({ advice });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give Adivce</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
