function evolutiva(vezes) {
    let cartas = [];
    for(i=0;i<vezes;i++) {
        let carta = facesCartas(randIntInc(1, 13));

        const cartaObj = document.createElement('div');
        const descObj = document.createElement('div');
        descObj.classList.add('desc');
        // Logica para ver a carta

        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (carta){
            case 'A': 
                dado.classList.add('AC');
             break;
            case '2': 
                dado.classList.add('2C');
            break;
            case '3': 
                dado.classList.add('3C');
            break;
            case '4': 
                dado.classList.add('4C');
            break;
            case '5': 
                dado.classList.add('5C');
            break;
            case '6': 
                dado.classList.add('6C');
            break;
            case '7': 
                dado.classList.add('7C');
            break;
            case '8': 
                dado.classList.add('8C');
            break;
            case '9': 
                dado.classList.add('9C');
            break;
            case '10': 
                dado.classList.add('10C');
            break;
            case 'J': 
                dado.classList.add('JC');
            break;
            case 'Q': 
                dado.classList.add('QC');
            break;  
            default: 
                dado.classList.add('KC');
             break;
        }

        
        desc.innerHTML = descreverSimbolos(element[1]);
        


        dado.appendChild(desc);
        mesa.appendChild(dado);





    }
}