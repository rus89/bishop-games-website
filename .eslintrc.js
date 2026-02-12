/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
    'requireConfigFile': false,
    'babelOptions': {
      'presets': ['@babel/preset-react'],
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'only-multiline',
    ],
  },
};
