export function debounce(millesegundos = 500){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = function (...args: any[]) {
            if(event) event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => {metodoOriginal.apply(this, args);}, millesegundos);
        }
        return descriptor;
    }
}