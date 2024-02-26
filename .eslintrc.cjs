module.exports = {
  parser: '@babel/eslint-parser', // or '@typescript-eslint/parser' if using TypeScript
  parserOptions: {
    ecmaVersion: 2021, // or later
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for prop type checking
    'react/react-in-jsx-scope': 'off', // React 17 does not require importing React for JSX
    'react/jsx-uses-react': 'off', // React 17 does not require importing React for JSX
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'always' },
    ],
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
