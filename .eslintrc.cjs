module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    // Add your custom rules here
    'react/prop-types': 'off', // If you're using TypeScript, prop-types are not needed
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow explicit return types on functions
    '@typescript-eslint/no-explicit-any': 'off', // Allowing the use of 'any' type
    'react/react-in-jsx-scope': 'off', // React 17 doesn't require import React from 'react'

    // Rule for enforcing a nice import order
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically includes the React version
    },
  },
};
