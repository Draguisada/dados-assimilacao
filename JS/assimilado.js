const nvlAssim = document.getElementById('nvlAssm');
const assimilar = document.getElementById('assimilar');

assimilar.addEventListener('click', function () {rolarDados({'x6': 0, 'x10': 1, 'x12': Number(nvlAssim.value)}, true)});

const facesCartas = {
    1: 'A',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
}


function contarSimbolosDentroObjeto(objeto, mult=1) {
    objeto.forEach(element => {
        for(i=0;i<element[1].length;i++) {
            switch (element[1][i]){
                case'!': sucessosTotal=1*mult; break;
                case '?': adaptacoesTotal=1*mult; break;
                case '#': pressoesTotal=1*mult; break;
                default: break;
            }
        };
    });
}

function mostrarCartas() {
    cartas = [];
    cartas.push(evolutiva(sucessosTotal));
    cartas.push(adaptativas(adaptacoesTotal));
    cartas.push(inoportunas(pressoesTotal));
    cartas.forEach(element => {
        const dado = document.createElement('div');
        const desc = document.createElement('div');
        desc.classList.add('desc');
        // Logica para ver a carta


        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (element[1]){
            case 'x6': dado.classList.add('x6'); break;
            case 'x10': dado.classList.add('x10'); break;
            default: dado.classList.add('x12'); break;
        }

        if (element[1].length > 0) {
            contarSimbolos(element[1]); 
            dado.textContent = simbolToEmoji(element[1]);
        } else {
            dado.classList.add('none');
        }
        desc.innerHTML = descreverSimbolos(element[1]);
        


        dado.appendChild(desc);
        mesa.appendChild(dado);

   });
   updateTotal();
}