module.exports = {
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
  },
}
