System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function debounce(millesegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(timer);
                timer = setTimeout(() => { metodoOriginal.apply(this, args); }, millesegundos);
            };
            return descriptor;
        };
    }
    exports_1("debounce", debounce);
    return {
        setters: [],
        execute: function () {
        }
    };
});
