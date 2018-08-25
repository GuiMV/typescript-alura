import { NegociacaoParcial , Negociacao} from './../models/index';
import { Service } from './Service';

export class NegociacaoService extends Service {

    obterNegociacoes() {
        return this.fetchHandled('http://localhost:8080/dados')
            .then((dados: NegociacaoParcial[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)));
    }
}