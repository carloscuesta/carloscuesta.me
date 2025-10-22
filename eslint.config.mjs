import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import globals from 'globals'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import nextPlugin from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'
import pluginJest from 'eslint-plugin-jest'
import react from 'eslint-plugin-react'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      '@next/next': nextPlugin,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      jest: pluginJest,
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        RequestInfo: 'readonly',
        RequestInit: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [['src', './src']],
        },
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['*.spec.tsx', 'stubs.ts', '**/__mocks__/*.ts'],
    rules: {
      'react/display-name': 0,
      'react/prop-types': 0,
      '@next/next/no-css-tags': 0,
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/no-unknown-property': [
        2,
        {
          ignore: ['jsx', 'global'],
        },
      ],
    },
  },
  {
    files: ['**/opengraph-image.tsx'],
    rules: {
      'react/no-unknown-property': [
        2,
        {
          ignore: ['tw'],
        },
      ],
    },
  },
]
