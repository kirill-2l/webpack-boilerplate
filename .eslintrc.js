module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2016,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  globals: {
    DEBUG: 'readonly',
  },
};
