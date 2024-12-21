import { useState } from 'react';
import './button.css';
import Keys from './keys/keys.component';

const Button = () => {

    const [result, setResult] = useState('');

    const handleCalculation = (result: string) => {
        setResult(result);
    }

    return (
        <div>
            <Keys onAct={handleCalculation} />
        </div>
    );
}

export default Button
