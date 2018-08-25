System.register(["../services/NegociacaoService", "../views/index", "../models/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var NegociacaoService_1, index_1, index_2, index_3, NegociacaoController, DiaSemana;
    return {
        setters: [
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._negociacaoService = new NegociacaoService_1.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    const negociacao = new index_2.Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    if (!this.ehDiaUtil(negociacao.data.getDay())) {
                        this._mensagemView.update('Apenas negociações em dias úteis, por favor!');
                        return;
                    }
                    this._negociacoes.adiciona(negociacao);
                    index_3.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação salva com sucesso!');
                }
                importa() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const negociacoesImportadas = this._negociacoes.paraArray();
                            const negociacoes = yield this._negociacaoService.obterNegociacoes();
                            negociacoes.filter(negociacao => !negociacoesImportadas.some(negociacaoAdicionada => negociacaoAdicionada.ehIgual(negociacao)))
                                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                            this._mensagemView.update('Negociações importadas com sucesso!');
                        }
                        catch (err) {
                            this._mensagemView.update(err.message);
                        }
                        ;
                    });
                }
                ehDiaUtil(dia) {
                    return DiaSemana.SABADO != dia && DiaSemana.DOMINNGO != dia;
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.debounce()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.debounce()
            ], NegociacaoController.prototype, "importa", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["SABADO"] = 6] = "SABADO";
                DiaSemana[DiaSemana["DOMINNGO"] = 0] = "DOMINNGO";
                DiaSemana[DiaSemana["SEGUNDA"] = 1] = "SEGUNDA";
                DiaSemana[DiaSemana["TERCA"] = 2] = "TERCA";
                DiaSemana[DiaSemana["QUARTA"] = 3] = "QUARTA";
                DiaSemana[DiaSemana["QUINTA"] = 4] = "QUINTA";
                DiaSemana[DiaSemana["SEXTA"] = 5] = "SEXTA";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
