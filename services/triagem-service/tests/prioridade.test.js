const PrioridadeEmergencia = require('../src/domain/PrioridadeEmergencia');
const PrioridadeUrgente = require('../src/domain/PrioridadeUrgente');
const PrioridadeNormal = require('../src/domain/PrioridadeNormal');

describe('TDD - Teste das Estratégias de Prioridade (SOLID/Strategy)', () => {
  
  test('Deve retornar "Emergência" quando usar a estratégia correspondente', () => {
    const estrategia = new PrioridadeEmergencia();
    expect(estrategia.definir()).toBe('Emergência');
  });

  test('Deve retornar "Urgente" quando usar a estratégia correspondente', () => {
    const estrategia = new PrioridadeUrgente();
    expect(estrategia.definir()).toBe('Urgente');
  });

  test('Deve retornar "Normal" quando usar a estratégia correspondente', () => {
    const estrategia = new PrioridadeNormal();
    expect(estrategia.definir()).toBe('Normal');
  });

});