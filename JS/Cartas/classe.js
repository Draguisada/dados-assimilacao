class Carta {
    constructor() {
        this.nome = false;
        
        this.obj = document.createElement('div');
        this.desc = document.createElement('div');
        this.desc.classList.add('cartasDesc');
        
        this.descString = '<gambiarra><input type="button" value="X" class="xzinho"></gambiarra>';
        this.obj.visu = true;
    }

    classe(classeCSS) {
        this.obj.classList.add(classeCSS);
    }

    nomeAdd(nome) {
        this.nome = nome
        this.descString += `<h1 class='nomeCarta'> Assimilação ${nome} </h1><br>`
    }

    descAdd(desc) {
        this.descString += `<p class='itemDesCarta'>${desc}</p>`;
        this.descString += '<br>';
    }

    descStringToHTML() {
        
        this.desc.innerHTML = this.descString;
    }

    organizar() {
        this.descStringToHTML();
        
        this.desc.tag = instancia;
        this.obj.tag = instancia++;
        // this.obj.appendChild(this.desc);
        
    }
}