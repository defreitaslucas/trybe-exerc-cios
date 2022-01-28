import './App.css';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
  }
  
  isPar(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1() {

    this.setState((previusState) => {
      return ({numeroDeCliques: previusState.numeroDeCliques + 1})
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1} style={{ backgroundColor: this.isPar(this.state.numeroDeCliques)}}>Botão 1</button>
      </div>
    );
  }
}

export default App;
