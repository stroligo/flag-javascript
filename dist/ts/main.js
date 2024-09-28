"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimetroRetangulo = perimetroRetangulo;
exports.areaRetangulo = areaRetangulo;
exports.areaCirculo = areaCirculo;
exports.circunferenciaCirculo = circunferenciaCirculo;
/* Perimetro de um retangulo - P=2×(L+W)
P é o perímetro do retângulo.
L é o comprimento (um dos lados maiores).
W é a largura (um dos lados menores). */
function perimetroRetangulo(width, height) {
    return 2 * (width + height);
}
/* Area de um retangulo - A=L×W
  A é a área do retângulo.
  L é o comprimento (um dos lados maiores).
  W é a largura (um dos lados menores). */
function areaRetangulo(width, height) {
    return width * height;
}
/* Area de um circulo - A=π×r²
  A é a área do círculo.
  π é uma constante aproximadamente igual a 3,14159.
  r é o raio do círculo (a distância do centro até a borda). */
function areaCirculo(radius) {
    return 3.14159 * (radius * radius); // Corrigido para raio ao quadrado
}
/* Circunferência de um círculo -- C=2×π×r
  C é a circunferência.
  π é aproximadamente 3,14159.
  r é o raio do círculo (distância do centro até a borda). */
function circunferenciaCirculo(radius) {
    return 2 * Math.PI * radius;
}
