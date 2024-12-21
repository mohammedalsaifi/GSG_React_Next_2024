import './Display.css'

interface DisplayProps {
    result: string;
}

const Display = ({ result }: DisplayProps) => {
    return (
        <div className="calculator-display">
            <input
                type="text"
                value={result}
                readOnly
                className="display-input"
            />
        </div>
    );
};

export default Display; 