import { Component } from 'react';
import Container from './components/Container';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Contacts />
        </Container>
      </div>
    );
  }
}

export default App;
