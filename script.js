const startDialog = document.getElementById('game-start-dialog');

const player1Input = document.getElementById('player1-name');
const player2Input = document.getElementById('player2-name');

const startBtn = document.getElementById('start-game');

const winDialog = document.getElementById('winner-dialog');
const drawDialog = document.getElementById('draw-dialog');

const winMessage = document.getElementById('win-message');

const restart = document.getElementById('restart');

let player1 = 'Player 1';
let player2 = 'Player 2';

let board = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

const cells = document.querySelectorAll('.cell');


// Show start dialog when the page loads
startDialog.showModal();


// Start game
startBtn.addEventListener('click', () => {

    player1 = player1Input.value || 'Player 1';
    player2 = player2Input.value || 'Player 2';

    startDialog.close();

});


// Switch between X and O
function switchPlayer()
{
    if (currentPlayer === 'X')
    {
        currentPlayer = 'O';
    }
    else
    {
        currentPlayer = 'X';
    }
}


// Cell click logic
cells.forEach((cell, index) => {

    cell.addEventListener('click', () => 
    {
        // Don't allow occupied cells
        if (board[index] !== '')
        {
            return;
        }

        // Store the move
        board[index] = currentPlayer;

        // Display X or O
        cell.textContent = currentPlayer;


        // Check for winner
        const winner = checkWinner();

        if (winner)
        {
            if (winner === 'X')
            {
                winMessage.textContent = `${player1} wins!`;
            }
            else
            {
                winMessage.textContent = `${player2} wins!`;
            }

            winDialog.showModal();

            return;
        }


        // Check for draw
        if (checkDraw())
        {
            drawDialog.showModal();

            return;
        }


        // Switch player
        switchPlayer();
    });

});


// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


// Check winner
function checkWinner()
{
    for (let combination of winningCombinations)
    {
        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
            board[a] !== '' &&
            board[a] === board[b] &&
            board[a] === board[c]
        )
        {
            return board[a];
        }
    }

    return null;
}


// Check draw
function checkDraw()
{
    return board.every(cell => cell !== '');
}

// Restart Game
restart.addEventListener( 'click' , () => {
location.reload();
})