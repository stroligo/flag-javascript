import {
  perimetroRetangulo,
  areaRetangulo,
  areaCirculo,
  circunferenciaCirculo,
} from '../ts/main';

describe('Testes de funções geométricas', () => {
  test('Deve calcular corretamente o perímetro de um retângulo', () => {
    expect(perimetroRetangulo(10, 5)).toBe(30);
  });

  test('Deve calcular corretamente a área de um retângulo', () => {
    expect(areaRetangulo(10, 5)).toBe(50);
  });

  test('Deve calcular corretamente a área de um círculo', () => {
    expect(areaCirculo(5)).toBeCloseTo(78.53975, 5);
  });

  test('Deve calcular corretamente a circunferência de um círculo', () => {
    expect(circunferenciaCirculo(5).toFixed(5)).toBe('31.41593');
  });
});
