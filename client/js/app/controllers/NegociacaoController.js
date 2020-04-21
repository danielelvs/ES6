class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //criando alias de document query selector
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); // cancela a submissao do formulario
        console.log(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );
    }

}