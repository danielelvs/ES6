class NegociacaoController {

    adiciona(event) {
        event.preventDefault(); // cancela a submissao do formulario
        

        let $ = document.querySelector.bind(document); //criando alias de document query selector

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value, inputQuantidade.value, inputValor.value);
    }

}