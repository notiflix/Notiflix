// For a detailed explanation regarding each configuration property, visit: https://jestjs.io/docs/configuration

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  rootDir: 'test',
  bail: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^@test/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  detectOpenHandles: true,
};

module.exports = jestConfig;
