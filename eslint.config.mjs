import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'playwright-report',
      'playwright.config.js',
    ],
  },

  {
  ...pluginJs.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },
  
  {
    ...playwright.configs['flat/recommended'],
  },

  {
    rules: {
      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
    },
  },
];
