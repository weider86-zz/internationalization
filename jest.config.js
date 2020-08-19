const rootPath = '<rootDir>/src';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': `${rootPath}/fileMock.js`,
  },
};
