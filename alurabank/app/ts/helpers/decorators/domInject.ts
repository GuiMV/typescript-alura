export function domInject(seletor: string) {
    return function (target: any, key: string) {
        let elemento: HTMLInputElement;

        const getter = function() {
            if(!elemento) {
                console.log(`Injetando o elemento ${key} com o seletor ${seletor}`);
                elemento = <HTMLInputElement>document.querySelector(seletor);
            }
            return elemento;
        }

        Object.defineProperty(target, key, { get : getter});
    }
}