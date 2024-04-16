module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['**/node_modules/**', '{tmp,temp}/**', '**/*.min.js', 'dist/**', 'public/**'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double']
      }
    },
  ],
}
