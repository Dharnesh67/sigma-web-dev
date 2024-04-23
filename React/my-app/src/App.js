// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
function App() {
  const [a, setValue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>{a}</p>
        <button onClick={() => setValue(a + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
