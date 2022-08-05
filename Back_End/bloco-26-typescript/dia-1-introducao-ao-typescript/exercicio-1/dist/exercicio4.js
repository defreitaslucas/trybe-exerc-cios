"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercicio2_1 = __importDefault(require("./exercicio2"));
const exercicio3_1 = __importDefault(require("./exercicio3"));
const monthsNames = Object.values(exercicio2_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [exercicio3_1.default.OUTONO]: [exercicio2_1.default.MARCO, exercicio2_1.default.ABRIL, exercicio2_1.default.MAIO, exercicio2_1.default.JUNHO],
    [exercicio3_1.default.INVERNO]: [exercicio2_1.default.JUNHO, exercicio2_1.default.JULHO, exercicio2_1.default.AGOSTO, exercicio2_1.default.SETEMBRO],
    [exercicio3_1.default.PRIMAVERA]: [exercicio2_1.default.SETEMBRO, exercicio2_1.default.OUTUBRO, exercicio2_1.default.NOVEMBRO, exercicio2_1.default.DEZEMBRO],
    [exercicio3_1.default.VERAO]: [exercicio2_1.default.DEZEMBRO, exercicio2_1.default.JANEIRO, exercicio2_1.default.FEVEREIRO, exercicio2_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [exercicio3_1.default.PRIMAVERA]: seasonsSouth[exercicio3_1.default.OUTONO],
    [exercicio3_1.default.VERAO]: seasonsSouth[exercicio3_1.default.INVERNO],
    [exercicio3_1.default.OUTONO]: seasonsSouth[exercicio3_1.default.PRIMAVERA],
    [exercicio3_1.default.INVERNO]: seasonsSouth[exercicio3_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(exercicio2_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
