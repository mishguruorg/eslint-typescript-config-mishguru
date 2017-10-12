module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'standard-babel',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'babel',
    'standard',
    'flowtype'
  ],
  rules: {
    // Require braces in arrow function body
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 0,

    // Require parens in arrow function
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [2, 'always'],

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [2, 'always'],

    // Marks Flow type identifiers as defined.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 1
  }
}
