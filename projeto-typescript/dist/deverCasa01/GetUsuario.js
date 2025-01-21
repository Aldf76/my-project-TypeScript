"use strict";
// 1) Crie no arquivo index.ts da nossa aplicação uma função que retorne no typescrip baseado 
// em um enum com as seguintes condições: se for do tipo 1, é "Admin", se for do tipo 2 é "usuário"
//Tipos possíveis de usuário
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Admin"] = 1] = "Admin";
    TipoUsuario[TipoUsuario["Usuario"] = 2] = "Usuario";
})(TipoUsuario || (TipoUsuario = {}));
//implementando a interface
const funcionario1 = {
    id: 1,
    nome: "Jasmine",
    idade: 23,
    permissao: 1,
    funcao: "Gerencia"
};
//implementando a interface
const funcionario2 = {
    id: 1,
    nome: "Pedro",
    idade: 18,
    permissao: 2,
    funcao: "Vendas"
};
//implementando a interface
const funcionario3 = {
    id: 1,
    nome: "Helaine",
    idade: 18,
    permissao: 2,
    funcao: "Vendas"
};
function getTipoUsuario(funcionario) {
    const permissao = funcionario.permissao;
    switch (permissao) {
        case TipoUsuario.Admin:
            return "Admin";
        case TipoUsuario.Usuario:
            return "Usuario";
        default:
            return "Tipo de usuário inválido";
    }
}
console.log(getTipoUsuario(funcionario3));
