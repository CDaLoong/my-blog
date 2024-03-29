module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'operator-linebreak': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
