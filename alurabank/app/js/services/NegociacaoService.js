System.register(["./../models/index", "./Service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Service_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService extends Service_1.Service {
                obterNegociacoes() {
                    return this.fetchHandled('http://localhost:8080/dados')
                        .then((dados) => dados.map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante)));
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
