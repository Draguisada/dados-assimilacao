function inoportunas(vezes){
    // let cartas = [];
    let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    for(i=0;i<vezes;i++){
        rand = randIntInc(0, valores.length-1);
        valor = valores.at(rand);
        // trecho tirado por um gringo pra tirar 1 valor especifico da lista
        const index = valores.indexOf(valor);
        if (index > -1){ // only splice array when item is found
            valores.splice(index, 1); // 2nd parameter means remove one item only
}
        let cartaValor = facesCartas.valueOf()[valor];
        //cabo o trecho gringo    
        // Debug de apenas a carta de Ás
        // cartaValor = 'A';

        carta = new Carta();
        
        // Logica para ver a carta
        ignorarMin = document.getElementById('ignorar').checked;

        // O simbolo do dado (Se vai aparecer q é um D6, D10 ou D12)
        switch (cartaValor){
            case 'A': 
                carta.classe('xA');
                carta.nomeAdd('instável');
                carta.descAdd('🐺: -1 em um Instinto que não seja 1');
                carta.descAdd('🐺🐺: Má formação das pernas causa mobilidade reduzida e remove o primeiro sucesso investido em Fuga');
                carta.descAdd('🐺🐺🐺:  Hipersensibilidade à luz do Sol');
                carta.descAdd('🐺🐺🐺🐺: Perda de olfato e paladar');
                carta.descAdd('🐺🐺🐺🐺🐺: aixa tolerância à dor: caso sofra dano à Saúde proveniente de qualquer fonte, sofrerá um a mais e perderá um ponto de Determinação');
               
             break;
            case '2': 
                carta.classe('x2');
                carta.nomeAdd('insegura');
                carta.descAdd('🐺: -1 em um Instinto que não seja 1');
                carta.descAdd('🐺🐺: Atrofia o órgão responsável por um dos sentidos, exigindo 🐞 ou 🦌 extra em ativações ligadas a ele');
                carta.descAdd('🐺🐺🐺:  Mãos trêmulas exigem um 🐞 ou 🦌 extra para Conhecimento Artístico, Ofícios ou ataques com armas de pontaria');
                carta.descAdd('🐺🐺🐺🐺: Entra em pânico e não consegue nadar em qualquer corpo d’água');
                carta.descAdd('🐺🐺🐺🐺🐺: Desenvolve alguma alergia grave e incapacitante, ao ter contato com o objeto da alergia o Infectado perde a próxima ação');
                               
            break;
            case '3': 
                carta.classe('x3');
                carta.nomeAdd('desordenada');
                carta.descAdd('🐺: -1 em um Instinto que não seja 1)');
                carta.descAdd('🐺🐺: Desenvolve um membro extra (perna ou braço) que não funciona, aumentando o número de 🐞 necessários para ativações em Conflitos de cunho social em 1 para todo o grupo');
                carta.descAdd('🐺🐺🐺:  Rim defeituoso adicional é desenvolvido erroneamente pelo corpo, atrapalhando as funções do rim original. Sempre que sofrer escassez deágua deverá rolar um dado por ponto de Resolução e se não obtiver nenhum 🐞 sofrerá perda de Determinação no início e no fim de cada fase de jogo até que encontre algum remédio para dor ou passe por uma Recuperação');
                carta.descAdd('🐺🐺🐺🐺: Entra em pânico quando submerso e não consegue nadar');
                carta.descAdd('🐺🐺🐺🐺🐺: Desenvolve alergia grave e incapacitante. Ao ter contato com o objeto da alergia o Infectado perde a próxima ação');
               
            break;
            case '4': 
                carta.classe('x4');
                carta.nomeAdd('inquieta');
                carta.descAdd('🐺: Insônia e pesadelos constantes exigem rolagem de um dado por ponto de Resolução, não obtido nenhum 🐞 sofrerá perda de ponto Determinação');
                carta.descAdd('🐺🐺: Sempre que passar pelo processo de Assimilação o Infectado rolará 1d6 adicional');
                carta.descAdd('🐺🐺🐺:  Consome 50% a mais de suprimentos por hiperatividade física');
                carta.descAdd('🐺🐺🐺🐺: O Infectado ouve a própria voz representando os desejos do parasita em sua cabeça sempre que ativa rolagem assimilada, perdendo 2 pontos de Determinação além do custo de ativação normal');
                carta.descAdd('🐺🐺🐺🐺🐺: Adiciona 2 em suas rolagens de mutação');
               
            break;
            case '5': 
                carta.classe('x5');
                carta.nomeAdd('desgastada');
                carta.descAdd('🐺: Sempre que dormir em cama inadequada sofrerá um de dano à Saúde e um de dano à Determinação');
                carta.descAdd('🐺🐺: Sofre efeitos similares à artrite reumatoide, causando frequentes dores nas juntas. Ativações e testes de Práticas Esportivas precisam de um 🐞 ou 🦌 adicional');
                carta.descAdd('🐺🐺🐺:  Não consegue utilizar ferramentas, exceto as que tenham a qualidade “acessível”');
                carta.descAdd('🐺🐺🐺🐺: Não pode recuperar mais de um ponto de Saúde em uma única Fase de Recuperação');               
                carta.descAdd('🐺🐺🐺🐺🐺: Perde a capacidade de locomoção até que se submeta a cirurgia ou gaste um ponto de Assimilação para ignorar este efeito por uma hora');
               
            break;
            case '6': 
                carta.classe('x6');
                carta.nomeAdd('hedionda');
                carta.descAdd('🐺:  Desenvolve um bico que, embora funcional para extrair insetos do solo, gera uma penalidade em rolagens da aptidão Social que impede o uso de 🦌 para reduzir 🐺');
                carta.descAdd('🐺🐺: Seu metabolismo se transforma e opera de maneira única, exigindo uma 🦌 como custo extra de ativação para qualquer tratamento médico feito em você');
                carta.descAdd('🐺🐺🐺:  Não consegue utilizar ferramentas, exceto as que tenham a qualidade “acessível”');
                carta.descAdd('🐺🐺🐺🐺: Emite um odor criado para espantar predadores que ainda não se desenvolveu o bastante para este fim, mas já incomoda pessoas no ambiente. Não pode usar rolagens Assimiladas em Influência');
                carta.descAdd('🐺🐺🐺🐺🐺: Sua aparência hedionda faz com que, subconscientemente ou não, qualquer pessoa tenha medo de te ajudar, dobrando os custos de ações adaptativas que visem o seu benefício');
               
            break;
            case '7': 
                carta.classe('x7');
                carta.nomeAdd('sensível');
                carta.descAdd('🐺:  Qualquer dano sofrido aplica a condição Ferido, ainda que não reduza um nível de Saúde');
                carta.descAdd('🐺🐺: Qualquer tratamento de saúde causa danos a você equivalente ao número de pressões da rolagem de Medicina');
                carta.descAdd('🐺🐺🐺:  Sente dor crônica que faz com que realizar qualquer atividade física por mais de 30 minutos, por mais simples que seja (até mesmo caminhar), drena um ponto de Determinação');
                carta.descAdd('🐺🐺🐺🐺: Recebe um ponto de dano a mais em qualquer dano físico sofrido');
                carta.descAdd('🐺🐺🐺🐺🐺: Um destempero em seu sistema nervoso faz com que qualquer toque cause dor, drenando um ponto de Determinação');
               
            break;
            case '8': 
                carta.classe('x8');
                carta.nomeAdd('desfocada');
                carta.descAdd('🐺:  Tem visão periférica reduzida, aumentando em 🐞 ou 🦌 a dificuldade de todos os testes de Percepção)');
                carta.descAdd('🐺🐺: Sofre de penalidade de 🐞 em testes de Reação quando surpreendido');
                carta.descAdd('🐺🐺🐺:  Tem dificuldade em determinar profundidade com precisão, recebendo penalidade de 🐞 em testes de ataque à distância');
                carta.descAdd('🐺🐺🐺🐺: Quando em ambientes muito escuros ou com luz ofuscante, precisa gastar uma 🐞 ou um 🦌 extra para agir');
                carta.descAdd('🐺🐺🐺🐺🐺: Acrescenta um 🐺 à face do primeiro dado de Percepção ou Reação mantido'); 

            break;
            case '9': 
                carta.classe('x9');
                carta.nomeAdd('calcificada');
                carta.descAdd('🐺:  Suas ativações de potência custam uma 🐞 ou 🦌 um a mais');
                carta.descAdd('🐺🐺: Articulações enrijecidas adicionam 🐺 à face de de um dado mantido de Práticas Esportivas');
                carta.descAdd('🐺🐺🐺:  empre que perder um nível de saúde em dano concussivo sofrerá fratura, exigindo 5 sucessos acumulados de Medicina ao longo de uma semana');
                carta.descAdd('🐺🐺🐺🐺: Recebe dano dobrado de queda');
                carta.descAdd('🐺🐺🐺🐺🐺: Qualquer tentativa de neutralizar a ameaça através de ataques físicos causa 1 ponto de dano a você');
               
            break;
            case '10': 
                carta.classe('x10');
                carta.nomeAdd('involuntária');
                carta.descAdd('🐺: Movimentos involuntários leves adicionam 🐺 à face de um dado mantido de ataques à distância. Pode gastar um ponto de Determinação para ignorar este efeito');
                carta.descAdd('🐺🐺: Espasmos reduzem 🐞 ou 🦌 em testes de Resolução');
                carta.descAdd('🐺🐺🐺:  Sempre que mantiver 🐺 em testes de potência sofrerá 1 ponto de dano para cada 🐺 mantido');
                carta.descAdd('🐺🐺🐺🐺: Em testes de Fuga as 🐺 mantidas reduzirão sucessos coletivos na ativação');
                carta.descAdd('🐺🐺🐺🐺🐺: Sempre que mantiver 🐺 mais que 🐞 em um teste durante conflito, perderá controle dos movimentos e não agirá na próxima rodada');
               
            break;
            case 'J': 
                carta.classe('xJ');
                carta.nomeAdd('sudoríparia');
                carta.descAdd('🐺: Transpiração excessiva o desidrata mais rapidamente; precisa consumir o dobro de água');
                carta.descAdd('🐺🐺: Ardência nos olhos aumenta o custo de ativações de ataque à distância em 🐞 ou 🦌');
                carta.descAdd('🐺🐺🐺:  Precisa trocar de roupas ou lavá-las diariamente; um dia sem fazê-lo gerará odor desconfortável aos companheiros; uma semana sem fazê-lo gera fungos que podem causar doenças');
                carta.descAdd('🐺🐺🐺🐺: Precisa utilizar algum tipo de hidratante cutâneo diariamente ou sofrerá efeitos de desidratação');
                carta.descAdd('🐺🐺🐺🐺🐺: Descontrole total da sudorese impede regulação térmica adequada, sofrendo efeito dobrado de ambientes hostis');
               
            break;
            case 'Q': 
                carta.classe('xQ');
                carta.nomeAdd('atrofiada');
                carta.descAdd('🐺:  Perde parte do tônus muscular; aumentando o custo de compra de novos pontos de Potência em 1');
                carta.descAdd('🐺🐺: Sistema digestivo atrofiado limita a quantidade de ingestão de comida por refeição, obrigando o dobro da frequência de consumo de alimentos; ainda consome a mesma quantidade diária.');
                carta.descAdd('🐺🐺🐺:  Coração atrofiado gera penalidade cumulativa de 🐞 ou 🦌 a partir da terceira rodada de Conflito; essa penalidade pode ser ignorada consumindo um ponto de Determinação');
                carta.descAdd('🐺🐺🐺🐺: Perde um ponto de Saúde por nível');
                carta.descAdd('🐺🐺🐺🐺🐺: Atrofia no sistema nervoso central impede a execução de múltiplas ações em uma única rodada, independentemente de quantos 🐞 ou 🦌 mantenha');
               
            break;  
            default: 
                carta.classe('xK');
                carta.nomeAdd('corroída');
                carta.descAdd('🐺:  Exala um cheiro metálico aumenta o custo de ativação para interação com animais em 🐞');
                carta.descAdd('🐺🐺: Apresenta sinais de intoxicação por minerais, gerando fadiga após a terceira rodada de Conflitos que gera penalidade de 🐞 em todos os testes; pode gastar Determinação para ignorar a penalidade');
                carta.descAdd('🐺🐺🐺:  Equipamentos metálicos em contato com sua pele por períodos prolongados perdem 1 ponto de Durabilidade por hora');
                carta.descAdd('🐺🐺🐺🐺: Sua pele se desgasta naturalmente, precisando trocar de pele a cada uma semana para evitar uma penalidade constante de 🐞 em qualquer teste; a troca de pele demora cerca de 4 horas');
                carta.descAdd('🐺🐺🐺🐺🐺: O excesso de metal no seu sangue pode gerar cirrose; requerendo o tratamento com sangrias a cada semana ou a doença se instaura');
             break;
        }

        carta.classe('espadas')

        carta.organizar();

        mesa.appendChild(carta.obj);
        document.body.appendChild(carta.desc);
    }
}