/** @type {import("prettier").Options} */
import prettier from 'prettier';

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  endOfLine: "lf",
  organizeImportsSkipDestructiveCodeActions: true,
  jsxSingleQuote: true,
  bracketSameLine: false,
  plugins: ['prettier-plugin-organize-imports'],
}

export default config;