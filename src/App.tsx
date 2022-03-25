import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Container from './components/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
