import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
    rules: {
      eqeqeq: 'error',
      'no-console': 'off',
    },
  },
];
