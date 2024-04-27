const vitest = require('eslint-plugin-vitest');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn', // warning, not error
    'vitest/expect-expect': 'off', // eliminate distracting red squiggles while writing tests
    'react/prop-types': 'off', // turn off props validation
  },
  globals: {
    ...vitest.environments.env.globals,
  },
};
