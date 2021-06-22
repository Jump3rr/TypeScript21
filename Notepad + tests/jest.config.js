module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.jsx?$": "babel-jest"
  },
  roots: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
};