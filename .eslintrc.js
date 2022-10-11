module.exports = {
  globals: {},
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
      }
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: [
          'test/unit/index.js'
        ]
      }
    ],
    semi: 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'guard-for-in': 'warn',
    'consistent-return': 'off',
    'no-shadow': 'warn',
    'import/first': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-use-before-define': 'off',
    'no-case-declarations': 'warn',
    'no-underscore-dangle': 'off',
    camelcase: 'warn',
    yoda: 'error',
    'comma-dangle': 'off',
    'no-mixed-operators': 'warn',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-tabs': [
      'error'
    ],
    'object-shorthand': [
      'error'
    ],
    'one-var': [
      'error',
      'never'
    ],
    'padded-block': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    radix: 'off',
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message: 'for...of is not allowed'
      }
    ],
    'max-len': [
      'warn',
      {
        comments: 150,
        code: 200
      }
    ],
    'no-restricted-globals': 'off',
    'prefer-destructuring': 'error',
    'prefer-promise-reject-errors': 'off',
    'class-methods-use-this': 'off',
    'new-cap': 'warn',
    'import/no-named-as-default-member': 'warn',
    'no-continue': 'warn',
    'import/prefer-default-export': 'warn',
    'arrow-parens': 'off',
    'no-fallthrough': 'warn',
    'no-restricted-properties': 'warn',
    'array-callback-return': 'warn',
    'func-names': 'off',
    'no-bitwise': 'warn',
    'object-curly-newline': 'off',
    'global-require': 'off',
    'no-unused-vars': 'error',
    'function-paren-newline': ['error', 'multiline'],
    'dot-location': 'off',
    'dot-notation': 'warn',
    'no-throw-literal': 'warn',
    'comma-spacing': 'warn',
    'newline-per-chained-call': 'off',
    'import/no-dynamic-require': 'warn',
    'arrow-body-style': 'warn',
    'no-new-func': 'warn',
    'template-curly-spacing': 'off',
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral']
    }],
    '@qcsfe/qcslint/prefer-format-listener': 'off',
    'no-console': 0
  }
}
