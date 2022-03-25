import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonGrid from './components/ButtonGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ButtonGrid>
        <Button />
      </ButtonGrid>
    </div>
  );
}

export default App;
