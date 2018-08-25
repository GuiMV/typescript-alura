System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service;
    return {
        setters: [],
        execute: function () {
            Service = class Service {
                fetch(url, handler) {
                    return fetch(url)
                        .then(res => handler(res))
                        .then(res => res.json())
                        .catch(err => {
                        console.log(err);
                        throw new Error('Não foi possível importar as negociações!');
                    });
                }
                fetchHandled(url) {
                    let isOk = res => {
                        if (res.ok) {
                            return res;
                        }
                        throw new Error(res.statusText);
                    };
                    return this.fetch(url, isOk);
                }
            };
            exports_1("Service", Service);
        }
    };
});
