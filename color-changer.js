const colorText = document.querySelector('#colorText');
const redBtn = document.querySelector('#redBtn');
const blueBtn = document.querySelector('#blueBtn');
const greenBtn = document.querySelector('#greenBtn');
const resetBtn = document.querySelector('#resetBtn');

const setColor = (color) => {
    colorText.style.color = color;
    colorText.textContent = `Color: ${color}`;
};

redBtn.addEventListener('click', () => setColor('red'));
blueBtn.addEventListener('click', () => setColor('blue'));
greenBtn.addEventListener('click', () => setColor('green'));

resetBtn.addEventListener('click', () => {
    setColor('black');
    colorText.textContent = 'Watch my color change!';
});
