export class Service {

    fetch(url: string, handler: HandlerFuncion) {
        return fetch(url)
            .then(res => handler(res))
            .then(res => res.json())
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações!');
            });
    }

    
    fetchHandled(url: string) {

        let isOk: HandlerFuncion = res => {
            if(res.ok) {
                return res;
            }
            throw new Error(res.statusText);
        }

        return this.fetch(url, isOk);
    }
}

export interface HandlerFuncion {

    (res: Response): Response;
}