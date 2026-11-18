console.log('missão iniciada!');
console.log(document);

// PASSO 3 - Por Id (#)
const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM';
titulo.style.color = 'red';

// PASSO 4 - Por classe (.)

const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';


const todos = document.querySelectorAll('.texto');
todos.forEach(p => p.style.color = 'green');

// Passo 5 - Por tag e combinação
const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

document.querySelector(
    '.container input[type="text"]'
);
campoNome.value = 'Maria';

// PASSO 6 - Texto , HTML e atributos
Textos[1].innerHTML = 'Segundo com <em>ênfase</em>';

const campoEmail = document.querySelector(
    'input[type="email"]'
);
campoEmail.setAttribute('placeholder', 'seu@email.com')