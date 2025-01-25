function evolutiva(vezes) {
    // let cartas = [];
    let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    for(i=0;i<vezes;i++) {
        rand = randIntInc(0, valores.length-1);
        valor = valores.at(rand);
        const index = valores.indexOf(valor);
        if (index > -1) { // only splice array when item is found
            valores.splice(index, 1); // 2nd parameter means remove one item only
        }
        let cartaValor = facesCartas.valueOf()[valor];
        // cartaValor = 'A';

        carta = new Carta();
        
        // Logica para ver a carta

        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (cartaValor){
            case 'A': 
                carta.classe('xA');
                carta.descAdd('🐞: +1 ponto em Sagacidade (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Sempre que realizar um teste de Sagacidade, você pode usar 1 ponto de assimilação para adicionar 1 a face de um dado.');
                if (getNvlAssimilacao() >= 3){
                    carta.descAdd('🐞🐞🐞:  Sempre que realizar um teste de Infiltração, você pode ignorar 1🐺 em um dado');
                }
                if (getNvlAssimilacao() >= 5){
                    carta.descAdd('🐞🐞🐞🐞: Sempre que realizar um teste de Sagacidade, você pode adicionar 1🐞 à face de um dado');
                }
                if (getNvlAssimilacao() >= 7) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Sempre que realizar um teste de Sagacidade, você pode substituir todas as 🦌 por 🐞')
                }
             break;
            case '2': 
                carta.classe('x2');
                carta.descAdd('🐞: Adicione +1 ponto em Reação (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: adicione um 🦌 à face de um  dado de Reação em uma rolagem');
                if (getNvlAssimilacao() >= 3) {
                    carta.descAdd('🐞🐞🐞:  Ignore uma 🐺 na sua primeira ação em um conflito');
                }
                if (getNvlAssimilacao() >= 5){
                    carta.descAdd('🐞🐞🐞🐞: Adicione 🐞 à face de um dado de Reação');
                }
                if (getNvlAssimilacao() >= 7) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode substituir uma 🐺 por 🦌 em um dado de Reação');
                }
            break;
            case '3': 
                carta.classe('x3');
                carta.descAdd('🐞: Adicione +1 ponto em Percepção (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: adicione um 🐞 à face de um dado de Percepção em uma rolagem');
                if (getNvlAssimilacao() >= 3) {
                    carta.descAdd('🐞🐞🐞:  Uma vez por rodada você pode transferir um 🐞 em Percepção para um aliado sem pagar o custo de 🦌');
                }
                if (getNvlAssimilacao() >= 5){
                    carta.descAdd('🐞🐞🐞🐞: Adicione 🦌 à face de um dado de Percepção');
                }
                if (getNvlAssimilacao() >= 7) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode substituir uma 🦌 por 🐞 em um dado de Percepção');
                }
            break;
            case '4': 
                carta.classe('x4');
            break;
            case '5': 
                carta.classe('x5');
            break;
            case '6': 
                carta.classe('x6');
            break;
            case '7': 
                carta.classe('x7');
            break;
            case '8': 
                carta.classe('x8');
            break;
            case '9': 
                carta.classe('x9');
            break;
            case '10': 
                carta.classe('x10');
            break;
            case 'J': 
                carta.classe('xJ');
            break;
            case 'Q': 
                carta.classe('xQ');
            break;  
            default: 
                carta.classe('xK');
             break;
        }

        carta.classe('copas')

        carta.organizar();

        mesa.appendChild(carta.obj);
        document.body.appendChild(carta.desc);
    }
}