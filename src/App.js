import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Title from './Components/Title'
import Todo from './Components/Todos'
class App extends Component {
  render() {
    return(
      <div className = "App">
        <Container>
          <Title />
          <Todo />
        </Container>
      </div>
    )
  }
}


export default App;
