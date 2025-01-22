"use strict";
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
/*
function applyMixins(derivedCtor: any, baseCtors: any[]): void {
 baseCtors.forEach(baseCtor => {
     // Verificar métodos e propriedades no prototype
     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
         // Evitar conflitos de nomes
         if (derivedCtor.prototype[name]) {
             console.warn(`Conflito detectado: '${name}' já existe em '${derivedCtor.name}'. Será sobrescrito.`);
         }
         // Copiar método ou propriedade
         derivedCtor.prototype[name] = baseCtor.prototype[name];
     });

     // Inicializar propriedades diretamente no construtor do derivado
     Object.getOwnPropertyNames(baseCtor).forEach(staticName => {
         if (!derivedCtor.hasOwnProperty(staticName)) {
             derivedCtor[staticName] = baseCtor[staticName];
         }
     });
 });
}

*/ 
