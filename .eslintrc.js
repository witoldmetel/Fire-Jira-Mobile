module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 0,
        'prettier/prettier': [
          //or whatever plugin that is causing the clash
          'error',
          {
            tabWidth: 2,
            printWidth: 100,
          },
        ],
      },
    },
  ],
};
