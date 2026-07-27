const initialLog = [
    {
        squares: [],
        operation: 'sum',
        result: 0,
    },
];

export default function Log() {
    return (
        <ol id="log">
            <li>
                <span>Player 1</span>
                <span>Player 2</span>
            </li>
        </ol>
    );
}