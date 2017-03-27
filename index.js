module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'standard-babel'
  ],
  plugins: [
    'babel',
    'standard'
  ],
  rules: {
    'arrow-body-style': [2, 'always'],
    'object-curly-spacing': [2, 'always']
  }
}
