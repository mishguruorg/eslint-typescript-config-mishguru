module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'ava',
    'standard',
    'mishguru'
  ],
  extends: [
    'standard',
    'standard-jsx',
    'plugin:mishguru/recommended'
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

    // AVA rules
    // https://github.com/avajs/eslint-plugin-ava#rules
    'ava/no-only-test': 'error',

    // max lines
    'max-lines': [ 'error', 400 ]
  }
}
