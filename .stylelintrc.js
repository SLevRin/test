module.exports = {
  extends: ['stylelint-config-idiomatic-order', 'stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
}
