module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2016,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [error, { devDependencies: true }],
  },
  globals: {
    DEBUG: 'readonly',
  },
};
