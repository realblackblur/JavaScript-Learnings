//Title
const header = document.querySelector('#title');   // by id
console.log(header.textContent);
header.textContent = 'Blur';
header.style.color = 'blue';

//Description
const para = document.querySelector('.description');   // by class
para.textContent = 'Learning DOM manipulation';

//Button
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    header.textContent = 'Button Clicked!';
    header.style.color = 'red';
});

