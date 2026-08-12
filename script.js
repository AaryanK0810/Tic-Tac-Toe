const winDialog = document.getElementById('winner-dialog');
const drawDialog = document.getElementById('draw-dialog');

let board = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

const cells = document.querySelectorAll('.cell');

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

cells.forEach((cell , index) => {

    cell.addEventListener('click' , () => 
    {
        if (board[index] !== '')
        {
            return;
        }

        board[index] = currentPlayer;

        cell.textContent = currentPlayer;

        const winner = checkWinner();

        if(winner)
        {
            winDialog.showModal();
        }

        if(checkDraw())
        {
            drawDialog.showModal();
        }

        switchPlayer();
    });
});

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner()
{
    for (let combination of winningCombinations)
    {
        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (board[a] !== '' &&
            board[a] == board[b] &&
            board[a] == board[c]
        )
        {
            return board[a];
        }
    }
    return null;
}

function checkDraw()
{
    return board.every(cell => cell !== '');
}