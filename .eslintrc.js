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
  rules: {
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/newline-after-import': 2,

    '@typescript-eslint/explicit-function-return-type': 0, // 函数必须指定返回类型
    '@typescript-eslint/no-misused-promises': 0, // promiss函数不能复制给普通函数
    '@typescript-eslint/restrict-template-expressions': 0, // 模板字符串中的变量必须是字符串类型
    '@typescript-eslint/strict-boolean-expressions': 0, // 必须判断null或空值
    '@typescript-eslint/prefer-nullish-coalescing': 0, // 不能使用||

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
}
