import './styles.css';
import { getRandomInt } from './utils';
console.log('Ready to Party');

let guessCount = 0;
const squares = document.querySelectorAll('.square');
const count = document.getElementById('count') as HTMLSpanElement;
const secret = getRandomInt(1, 6);

console.log(`The secret is ${secret}`);

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if ((idx + 1) === secret) {
        el.dataset.secret = 'true';
    }
    sq.addEventListener('click', handleClick)

});

function handleClick() {
    const el = this as HTMLDivElement;
    guessCount++;
    count.innerHTML = `<small> you have made <b>${guessCount}</b> guesses</small>`;
    if (el.dataset.secret) {
        el.classList.add('winner');
        squares.forEach(sq => sq.removeEventListener('click', handleClick));
    } else {
        el.classList.add('loser');
        el.removeEventListener('click', handleClick);
    }

}