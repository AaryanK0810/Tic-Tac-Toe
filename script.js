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