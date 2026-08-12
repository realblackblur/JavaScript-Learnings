const header = document.querySelector('#title');   // by id
console.log(header.textContent);
header.textContent = 'Blur';
header.style.color = 'blue';

const des = document.querySelector('.description');   // by class
des.textContent = 'Learning DOM manipulation';

