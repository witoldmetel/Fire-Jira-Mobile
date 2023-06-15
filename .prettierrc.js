const config = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'auto',
  semi: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/utils/(.*)$',
    '^~/components/(.*)$',
    '^~/hooks/(.*)$',
    '^~/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
};

module.exports = config;
