class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getData() {
        return this._data;
    }
    
    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

}


// dentro de classe metodo, fora de classe funcao.
// _(underline) convensao para o programador que esses atributos so podem acessa-los pela propria classe e nao fora.