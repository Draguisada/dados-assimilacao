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
        
        // Debug de apenas a carta de Ás
        // cartaValor = 'A';

        carta = new Carta();
        
        // Logica para ver a carta
        ignorarMin = document.getElementById('ignorar').checked;

        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (cartaValor){
            case 'A': 
                carta.classe('xA');
                carta.nomeAdd('astuta');
                carta.descAdd('🐞: +1 ponto em Sagacidade (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Sempre que realizar um teste de Sagacidade, você pode usar 1 ponto de assimilação para adicionar 1 a face de um dado.');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞:  Sempre que realizar um teste de Infiltração, você pode ignorar 1🐺 em um dado');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Sempre que realizar um teste de Sagacidade, você pode adicionar 1🐞 à face de um dado');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Sempre que realizar um teste de Sagacidade, você pode substituir todas as 🦌 por 🐞')
                }
             break;
            case '2': 
                carta.classe('x2');
                carta.nomeAdd('de alto reflexo');
                carta.descAdd('🐞: Adicione +1 ponto em Reação (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: adicione um 🦌 à face de um  dado de Reação em uma rolagem');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Ignore uma 🐺 na sua primeira ação em um conflito');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Adicione 🐞 à face de um dado de Reação');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode substituir uma 🐺 por 🦌 em um dado de Reação');
                }
            break;
            case '3': 
                carta.classe('x3');
                carta.nomeAdd('atenta');
                carta.descAdd('🐞: Adicione +1 ponto em Percepção (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: adicione um 🐞 à face de um dado de Percepção em uma rolagem');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Uma vez por rodada você pode transferir um 🐞 em Percepção para um aliado sem pagar o custo de 🦌');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Adicione 🦌 à face de um dado de Percepção');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode substituir uma 🦌 por 🐞 em um dado de Percepção');
                }
            break;
            case '4': 
                carta.classe('x4');
                carta.nomeAdd('vigorosa');
                carta.descAdd('🐞: Está imune aos efeitos da condição Ferido');
                carta.descAdd('🐞🐞: Dobra a quantidade de pontos de saúde no nível 5 (antes de morrer)');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Recupera 1 ponto de saúde extra por fase de recuperação');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Recebe um ponto de saúde máxima extra por nível');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Ignora até 2🐺 em dados de Resolução');
                }
            break;
            case '5': 
                carta.classe('x5');
                carta.nomeAdd('silvestre');
                carta.descAdd('🐞: Adicione um 🐞 em um dado de Infiltração para se camuflar na vegetação');
                carta.descAdd('🐞🐞: Não sofre perda de Determinação por dormir ao relento');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Pode adicionar 1🐞 na face de um dado em testes baseados em olfato');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Pode se mover em velocidade normal nas copas das árvores');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: O Rei da Selva nunca é atacado por animais');
                }
            break;
            case '6': 
                carta.classe('x6');
                carta.nomeAdd('pujante');
                carta.descAdd('🐞:  Pode usar 🦌 como 🐞 para ações de salto');
                carta.descAdd('🐞🐞: Converte 🦌 em 🐞 para deslocar objetos pesados');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Mantém um dado a mais para quebrar ou danificar objetos inanimados');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Pode utilizar armas improvisadas ou naturais com Prática de Armas como se fossem armas brancas');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Em rolagens assimiladas para testes de práticas esportivas os dados da prática não são descartados');
                }
            break;
            case '7': 
                carta.classe('x7');
                carta.nomeAdd('imponente');
                carta.descAdd('🐞:  Adicione +1 ponto em Conhecimento social (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Em ações de Influência para intimidar ou demonstrar autoridade pode converter 🦌 em 🐞');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  No início da fase de conflito pode usar um ponto de Assimilação para retirar um dado (à escolha do Assimilador) de Conflito que contenha ameaça senciente');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: O Líder Nato pode ceder 🐞 para anular 🦌 de aliados');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Uma vez por Fase pode transferir um ponto de Determinação para um aliado');
                }
            break;
            case '8': 
                carta.classe('x8');
                carta.nomeAdd('esguia');
                carta.descAdd('🐞:  Adicione +1 ponto em Prática de Infiltração (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Se estiver se movendo furtivamente ao iniciar um Conflito, não precisa utilizar Reação na primeira rodada');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Em rolagem para evitar detecção, o esguio pode adicionar 🦌 à face de um dado de Infiltração');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Sempre que adicionar 🐞 para ação de Fuga em Conflito, adicione um a mais');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Ignora o requisito mínimo individual para Fuga coletiva de Conflito');
                }
            break;
            case '9': 
                carta.classe('x9');
                carta.nomeAdd('sensitiva');
                carta.descAdd('🐞:  Consegue sentir olhares hostis mesmo sem ver a ameaça)');
                carta.descAdd('🐞🐞: Consegue sentir a presença de criaturas assimiladas em um raio de 15m');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Pode usar 🦌 ou 🐞 em qualquer teste de interação social para saber o nível de Assimilação de uma criatura olhando fixamente por alguns segundos');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Sempre que o Assimilador sacar uma carta do baralho de ameaças ele deve avisar isso antes ao Sensitivo');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode mudar a ação declarada sem gastar 🦌');
                }
            break;
            case '10': 
                carta.classe('x10');
                carta.nomeAdd('da presa');
                carta.descAdd('🐞: Pode usar audição aguçada e gastar um ponto de Assimilação para agir com Percepção em qualquer situação em que agiria com Reação');
                carta.descAdd('🐞🐞: Pode usar um ponto de Assimilação para aumentar sua velocidade e manter um dado a mais em rolagem de Fuga');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Enxerga normalmente na penumbra');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Você não pode ser rastreado');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode gastar um ponto de Assimilação e abdicar de sua próxima rolagem para cancelar uma ativação de Ameaça em um conflito');
                }
            break;
            case 'J': 
                carta.classe('xJ');
                carta.nomeAdd('de feromônios');
                carta.descAdd('🐞: Conta como se tivesse um ponto a mais em Influência para atrair a atenção de criaturas da mesma espécie');
                carta.descAdd('🐞🐞: Feromônios de alarme transformam adaptações em sucessos em ações de intimidação');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Feromônios de trilha deixam um rastro que só pode ser seguido por aliados');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: Feromônios de recrutamento indicam recursos na região (não precisa ser verdade), o Infectado escolhe quem capta esses sinais');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Feromônios de ataque custam 1 de mutação e aumentam 1d12 em todas as rolagens de Neutralização de Ameaças do Infectado e de seus aliados em cenas de conflito');
                }
            break;
            case 'Q': 
                carta.classe('xQ');
                carta.nomeAdd('da flora');
                carta.descAdd('🐞:  Adicione +1 ponto na Aptidão Conhecimento Agrário (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: revive vegetação morta, desde que ainda não esteja decomposta');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Consegue sentir as funções vitais da flora e curar suas enfermidades - demanda trabalho agrônomo');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: É capaz de realizar fotossíntese');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Pode acelerar em até 10 vezes o crescimento da vegetação');
                }
            break;  
            default: 
                carta.classe('xK');
                carta.nomeAdd('da fauna');
                carta.descAdd('🐞:  Adicione +1 ponto em Conhecimento Biológico (pode ultrapassar o limite máximo)');
                carta.descAdd('🐞🐞: Use 1 ponto de assimilação: dobra a recuperação de saúde da criatura tocada por uma semana');
                if (getNvlAssimilacao() >= 3 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞:  Consegue sentir as funções vitais da fauna e não é percebido como ameaça ou presa por animais - demanda trabalho agrônomo');
                }
                if (getNvlAssimilacao() >= 5 ^ ignorarMin){
                    carta.descAdd('🐞🐞🐞🐞: É Pode domesticar animais silvestres através de um teste de Influência + Resolução');
                }
                if (getNvlAssimilacao() >= 7 ^ ignorarMin) {
                    carta.descAdd('🐞🐞🐞🐞🐞: Cria rebanho que o segue por conta própria testando Influência + Biológico');
                }
             break;
        }

        carta.classe('copas')

        carta.organizar();

        mesa.appendChild(carta.obj);
        document.body.appendChild(carta.desc);
    }
}