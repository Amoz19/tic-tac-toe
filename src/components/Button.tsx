interface Square {
    square: string | null
}

interface HandleSquare extends Square {
    onSquareClick: () => void
}

const Button = ({
    square, onSquareClick }: HandleSquare) => {
    return (
        <button onClick={onSquareClick} className="square">{square}</button>
    );
}

export default Button;