const nvlAssim = document.getElementById('nvlAssm');
const assimilar = document.getElementById('assimilar');
// const descricoesCartas = document.getElementById('stats');

assimilar.addEventListener('click', function () {
    limparMesa();
    limparDescs();
    rolarDados({'x6': 0, 'x10': 1, 'x12': Number(nvlAssim.value)}, true);
});

let instancia = 0;

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

function limparDescs() {
    let crionca = document.getElementsByClassName('cartasDesc');
    const lencrionca = crionca.length;
    for(i=0;i<lencrionca.length;i++){
        document.body.removeChild(crionca[0]);
    };
}

mesa.addEventListener('click', event => {
    let tag = event.target.tag;
    // let index = 0;
    let descs = document.getElementsByClassName('cartasDesc');
    for (i=0;i<descs.length;i++) {
        descs[i].style.display = 'none';
        if (descs[i].tag == tag) {
            
            showDescription(descs[i]);
            continue;
        }
    }
    
});

function closeFather(element) {
    element.parentNode.style.display = 'none';
}

function getNvlAssimilacao() {
    return Number(nvlAssim.value);
}

function contarSimbolosDentroObjeto(objeto, mult=1) {
    sucessosTotal=0;
    adaptacoesTotal=0;
    pressoesTotal=0;
    objeto.forEach(element => {
        for(i=0;i<element[1].length;i++) {
            switch (element[1][i]){
                case'!': sucessosTotal+=1*mult; break;
                case '?': adaptacoesTotal+=1*mult; break;
                case '#': pressoesTotal+=1*mult; break;
                default: break;
            }
        };
    });
}

function mostrarCartas() {
    evolutiva(sucessosTotal);
    // adaptativas(adaptacoesTotal);
    // inoportunas(pressoesTotal);
//    updateTotal();
}


function showDescription(element) {
    element.style.display = 'block';
}