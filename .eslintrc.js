module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
  },
}
//
