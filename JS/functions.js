function validarValores () {
    let x6 = quantX6.value ? Number(quantX6.value) : 0;
    let x10 = quantX10.value ? Number(quantX10.value) : 0;
    let x12 = quantX12.value ? Number(quantX12.value) : 0;

    return {'x6': x6, 'x10': x10, 'x12': x12};
}

function rolarDados(rolarDados={'x6': 0, 'x10':0, 'x12':0}, cartas=false) {
    if (!cartas){
        if (!manterDados.checked) {
            limparMesa();
    }}
    
    let resultados = [];
    // Rolar todos os dados e identificando qual é X6, X10 ou X12.
    for(i=0;i<rolarDados.x6;i++) {
        resultados.push(['x6', randIntInc(1, 6)]);
    }
    for(i=0;i<rolarDados.x10;i++) {
        resultados.push(['x10', randIntInc(1, 10)]);
    }
    for(i=0;i<rolarDados.x12;i++) {
        resultados.push(['x12', randIntInc(1, 12)]);
    }

    //Transformar os valores em "simbolos"
    for(i=0;i<resultados.length;i++) {
        resultados[i][1] = tabelaDados[resultados[i][1]]
    }

    // historico.push(resultados);
    if (!cartas){
        mostrarMesa(resultados);
    } else {
        contarSimbolosDentroObjeto(resultados);
        updateTotal();
        mostrarCartas();
    }

}

function contarSimbolos(string, mult=1) {
    // let newString = '';
    for(i=0;i<string.length;i++) {
        switch (string[i]){
            case'!': sucessosTotal+=1*mult; break;
            case '?': adaptacoesTotal+=1*mult; break;
            case '#': pressoesTotal+=1*mult; break;
            default: break;
        }
    };
    // return newString;
}

function simbolToEmoji(string) {
    let newString = '';
    for(i=0;i<string.length;i++) {
        switch (string[i]){
            case'!': newString += '🐞'; break;
            case '?': newString += '🦌'; break;
            case '#': newString += '🐺'; break;
            default: break;
        }
    };
    return newString;
}

function descreverSimbolos(string) {
    let sucessos = 0;
    let adaptacao = 0;
    let pressao = 0;
    for(i=0;i<string.length;i++) {
        switch (string[i]){
            case'!': sucessos++; break;
            case '?': adaptacao++; break;
            case '#': pressao++; break;
            default: break;
        }
    };
    let newString = `${sucessos} Sucessos <br> ${adaptacao} Adaptação <br> ${pressao} Pressões <br> ${string} `;
    return newString;
}

function limparMesa() {
    let crionca = mesa.children;
    let lencrionca = crionca.length;
    for(i=0;i<lencrionca;i++){
        mesa.removeChild(crionca[0]);
    };
    sucessosTotal = 0;
    adaptacoesTotal = 0;
    pressoesTotal = 0;
    updateTotal();
}

function mostrarMesa(dados) {
    /* 
    Criar objeto
    const bloco = document.createElement('div');
    Modificar objeto
    bloco.classList.add('free');
    Adicionar o Objeto ao HTML
    mesa.appendChild(bloco);
    */
   dados.forEach(element => {
        const dado = document.createElement('div');
        const desc = document.createElement('div');
        desc.classList.add('desc');

        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (element[0]){
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

function updateTotal(string) {
    sucessos.textContent = `${sucessosTotal} Sucessos`;
    adaptacoes.textContent = `${adaptacoesTotal} Adaptações`;
    pressoes.textContent = `${pressoesTotal} Pressões`;
}