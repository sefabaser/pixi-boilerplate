// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/*spec.{ts,tsx}', '!**/*.d.ts', '!src/app.ts', '!src/main.ts'],
  coverageProvider: 'v8',
  setupFiles: ['jest-canvas-mock'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['node_modules/', 'build', 'dist', '.typings'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
