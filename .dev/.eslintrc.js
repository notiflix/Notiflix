// For TypeScript

module.exports = {
  overrides: [{
    files: ['*.d.ts', '*.ts', '*.tsx'],
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['tsconfig.json'],
      ecmaversion: 2021,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'semi': [
        'error',
        'always',
      ],
      'indent': [
        'error',
        2,
        {
          'ignoredNodes': [
            'TemplateLiteral',
          ],
        },
      ],
      'quotes': [
        2,
        'single',
        {
          'avoidEscape': true,
          'allowTemplateLiterals': true,
        },
      ],
    },
  }],
};
