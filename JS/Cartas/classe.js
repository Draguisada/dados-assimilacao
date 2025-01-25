class Carta {
    constructor() {
        this.obj = document.createElement('div');
        this.desc = document.createElement('div');
        this.desc.classList.add('cartasDesc');
        
        this.descString = '<input type="button" value="X" class="xzinho" onclick="closeFather(this)"> <br>';
    }

    classe(classeCSS) {
        this.obj.classList.add(classeCSS);
    }

    descAdd(desc) {
        this.descString += desc;
        this.descString += '<br><br>';
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