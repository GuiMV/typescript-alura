export function imprime(...objetos: any[]) {
    objetos.forEach(objeto => {
        console.log('Impressão genérica');
        console.log(JSON.stringify(objeto));
    });
}