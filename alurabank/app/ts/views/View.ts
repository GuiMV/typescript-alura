import { logarTempoDeExecucao } from "../helpers/index";

export abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string, private _escapar = false) {
        this._elemento = $(seletor);
    }

    update(model: T): void {
        let template = this.template(model);
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(model: T): string 
}