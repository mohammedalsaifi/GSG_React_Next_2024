import { useState } from 'react';
import './style.css';

function App() {
  const [value, setValue] = useState('');

  const handleInput = (input) => {
    setValue(value + input);
  };

  const evaluateResult = () => {
    setValue(eval(value).toString());
  };

  return (
    <div className="calculator">
      <div className="header">
        <div className="window">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <div className="input">{value || '0'}</div>
      </div>
      <div className="keys">
        <div className="row">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('/')}>÷</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => setValue('')}>AC</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={evaluateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
