class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //criando alias de document query selector
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); // cancela a submissao do formulario

        // ... spread operator
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) // como so tem uma linha, nao preciso do return, ele esta ali implicitamente.
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

}