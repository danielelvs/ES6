class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //criando alias de document query selector
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); // cancela a submissao do formulario

        // retorna o tipo. Informacao de vies educativo
        // console.log(typeof(this._inputData.value));

        // let data = new Date(this._inputData.value.split('-'));
        let data = new Date(this._inputData.value.replace(/-/g, ','));

    
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        console.log(data);

        // adicionar a negociacao em uma lista
    }

}