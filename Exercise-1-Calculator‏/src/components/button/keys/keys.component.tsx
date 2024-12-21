import React, { useState } from 'react'
import Display from '../../Display/Display.tsx'

interface IKeys {
    onAct: (result: string) => void
}

const Keys = (props: IKeys) => {

    const [value, setValue] = useState('');
    const [displayResult, setDisplayResult] = useState('');

    const handleInput = (input: string) => {
        setValue(value + input);
        setDisplayResult(value + input);
    };

    const evaluateResult = () => {
        try {
            const result = eval(value).toString();
            setValue(result);
            setDisplayResult(result);
            props.onAct(result);
        } catch (_error) {
            setValue('Error');
            setDisplayResult('Error');
            props.onAct('Error');
        }
    };

    const handleClear = () => {
        setValue('');
        setDisplayResult('');
    };

    return (
        <div className="calculator">
            <Display result={displayResult} />
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
                    <button onClick={handleClear}>AC</button>
                    <button onClick={() => handleInput('0')}>0</button>
                    <button onClick={() => handleInput('.')}>.</button>
                    <button onClick={evaluateResult}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Keys
