/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // Define a raiz dos testes
  testMatch: ['**/__tests__/**/*.ts'], // Adiciona o padrão para os arquivos de teste
  moduleFileExtensions: ['ts', 'js'], // Extensões de arquivos suportadas
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma arquivos TypeScript
  },
};
