import { NegociacaoService } from '../services/NegociacaoService';
import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, debounce, imprime } from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: HTMLInputElement;
    @domInject('#quantidade')
    private _inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @debounce()
    adiciona() {
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
        if(!this.ehDiaUtil(negociacao.data.getDay())){
            this._mensagemView.update('Apenas negociações em dias úteis, por favor!');
            return;
        }

        this._negociacoes.adiciona(negociacao);
        imprime(negociacao, this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação salva com sucesso!');
    }

    @debounce()
    async importa() {
        try {
            const negociacoesImportadas = this._negociacoes.paraArray();
            const negociacoes = await this._negociacaoService.obterNegociacoes();            
            negociacoes.filter(negociacao => !negociacoesImportadas.some(negociacaoAdicionada => negociacaoAdicionada.ehIgual(negociacao)))
                        .forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Negociações importadas com sucesso!');
        } catch(err) {
            this._mensagemView.update(err.message)
        };
    }

    public ehDiaUtil(dia: number): boolean {
        return DiaSemana.SABADO != dia  && DiaSemana.DOMINNGO != dia;
    }
}

enum DiaSemana {
    SABADO = 6,
    DOMINNGO = 0,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA    
}