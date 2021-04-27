module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    DEBUG: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2016,
  },
};
