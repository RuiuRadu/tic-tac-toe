export default function GameOver({ winner, onRestart }) {
    // if (winner === "Draw") {
    //     return (
    //         <div id="game-over">
    //             <h2>GAME OVER</h2>
    //             <p>The game ended in a draw!</p>
    //             <p><button onClick={() => window.location.reload()}>Play Again</button></p>
    //         </div>
    //     );
    // }
    return (
        <div id="game-over">
            <h2>GAME OVER</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>The game ended in a draw!</p>}
            <p><button onClick={onRestart}>Play Again</button></p>
        </div>
    );
}

// () => window.location.reload()