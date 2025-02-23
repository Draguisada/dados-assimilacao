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

document.addEventListener('click', event => {
    // Cada carta objeto tem uma tag junto com sua descrição
    let tag = event.target.tag;
    
    
    // let index = 0;
    let descs = document.getElementsByClassName('cartasDesc');
    for (i=0;i<descs.length;i++) {
        
        descs[i].style.display = 'none';

        //Otimizaçãozinha
        if (descs[i].tag > tag) {
            continue;     
        }
        

        // Apenas verifica se o objeto ter uma tag, se não, não é uma carta
        // Se o objeto não for uma carta, ele ainda passará por todas as cartas e esconder elas.

        // tag !== -1 é pro 0 não virar "false", então está fazendo procurar um valor INTIGER por isso o "==="
        if (tag !== -1 || event.target.parentElement.tag){
            if (descs[i].tag == tag || descs[i].tag == event.target.parentElement.tag) {
                
                showDescription(descs[i]);
                scrollTo(0, 0);
                continue;
            }
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