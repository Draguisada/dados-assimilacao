const mesa = document.getElementById('mesa');

const quantX6 = document.getElementById('x6');
const quantX10 = document.getElementById('x10');
const quantX12 = document.getElementById('x12');
const limparResults = document.getElementById('limparResult');
const manterDados = document.getElementById('manterDado');

const roll = document.getElementById('roll');

const tabelaDados = {
    1: '',
    2: '',
    3: '#',
    4: "#?",
    5: "#?",
    6: '!',
    7: "!!",
    8: "!?",
    9: "!?#",
    10: "!!#",
    11: "!??#",
    12: "##"
}

let historico = [];

roll.addEventListener('click', rolarDados);

// Quando clica em um dado ele remove o dado.
mesa.addEventListener('click', event => {
    mesa.removeChild(event.target);
});

limparResults.addEventListener('click', limparMesa);

// Funções globais
// Random intiger (Que é incluso) que pode ser um intervalo mas pode ser 0 até max
function randIntInc(min, max=null) {
    if (max === null) {
        max = min+1;
        min = 0;
    } else {max++};
    return Math.floor(Math.random() * (max - min) + min);
}