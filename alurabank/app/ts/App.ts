import { NegociacaoController } from './controllers/NegociacaoController';
const negociacaoController = new NegociacaoController();
$('#botao-importa').click(negociacaoController.importa.bind(negociacaoController));
let form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));
}