const img = document.querySelectorAll('img');
// Player 1
const firstRandomNum = Math.floor(Math.random()*6)+1;
const firstDiceImage = 'img/dice'+firstRandomNum+'.png'
img[0].setAttribute('src',firstDiceImage);
// Player 2
const secondRandomNum = Math.floor(Math.random()*6)+1;
const secondDiceImage = 'img/dice'+secondRandomNum+'.png'
img[1].setAttribute('src',secondDiceImage);
// Winner
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 1';
} else if (secondRandomNum > firstRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 2';
} else {
    document.querySelector('h1').innerHTML = 'It\'s a Draw!';
}

