import { Negociacao } from './Negociacao';

export class Negociacoes {
    
    private _negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}