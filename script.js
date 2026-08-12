let board = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

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