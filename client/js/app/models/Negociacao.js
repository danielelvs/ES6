class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data;
    }
    
    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}


// dentro de classe metodo, fora de classe funcao.
// _(underline) convensao para o programador que esses atributos so podem acessa-los pela propria classe e nao fora.