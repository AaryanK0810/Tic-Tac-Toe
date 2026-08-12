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

