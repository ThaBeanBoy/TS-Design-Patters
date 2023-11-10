module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@stylistic/js'],
  rules: { '@stylistic/js/indent': ['error', 2], 'linebreak-style': 0 },
};
