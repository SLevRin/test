module.exports = {
  ignorePatterns: ['!.*', '.next', 'next-env.d.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
    },
  },
  rules: {
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/newline-after-import': 2,

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/display-name': 0,

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/no-misused-promises': 0,
  },
}
