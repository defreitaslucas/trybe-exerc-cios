const { expect } = require('@jest/globals')
const { it } = require('jest-circus')
const { describe } = require('yargs')
const sum = require('./sum')

describe ('Exercicio 1', () => {
  it('verifica se manda um throw', () => {
    expect(sum('4','5')).toThrow(new Error('parameters must be numbers'));
  })
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  })
})