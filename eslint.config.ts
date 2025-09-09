import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser
    },
    plugins: {
      react: pluginReact
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    rules: {
      semi: ['error', 'always']
    }
  }
]);
