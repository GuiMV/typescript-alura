import { Igualavel } from './Igualavel';

export class Negociacao implements Igualavel<Negociacao> {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){
    }

    get volume() { return this.quantidade * this.valor; }

    ehIgual(igualavel: Negociacao): boolean {
        return this.data.getDate() == igualavel.data.getDate()
                && this.data.getMonth() == igualavel.data.getMonth()
                && this.data.getFullYear() == igualavel.data.getFullYear();
    }

}