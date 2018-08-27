module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'standard-babel',
    'plugin:flowtype/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'ava',
    'babel',
    'flowtype',
    'mocha',
    'react',
    'standard'
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

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md 
    'react/prop-types': 0,
    
    // mocha rules
    // https://github.com/lo1tuma/eslint-plugin-mocha
    'mocha/no-exclusive-tests': 'error',

    // flowtype rules
    'flowtype/require-valid-file-annotation': [ 2, 'never', {
      'annotationStyle': 'line'
    }]
  }
}
