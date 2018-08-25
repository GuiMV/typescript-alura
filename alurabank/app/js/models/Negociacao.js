System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() { return this.quantidade * this.valor; }
                ehIgual(igualavel) {
                    return this.data.getDate() == igualavel.data.getDate()
                        && this.data.getMonth() == igualavel.data.getMonth()
                        && this.data.getFullYear() == igualavel.data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
