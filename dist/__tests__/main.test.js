"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../ts/main");
describe('Testes de funções geométricas', () => {
    test('Deve calcular corretamente o perímetro de um retângulo', () => {
        expect((0, main_1.perimetroRetangulo)(10, 5)).toBe(30);
    });
    test('Deve calcular corretamente a área de um retângulo', () => {
        expect((0, main_1.areaRetangulo)(10, 5)).toBe(50);
    });
    test('Deve calcular corretamente a área de um círculo', () => {
        expect((0, main_1.areaCirculo)(5)).toBeCloseTo(78.53975, 5);
    });
    test('Deve calcular corretamente a circunferência de um círculo', () => {
        expect((0, main_1.circunferenciaCirculo)(5).toFixed(5)).toBe('31.41593');
    });
});
