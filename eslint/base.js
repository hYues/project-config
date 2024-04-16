module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['**/node_modules/**', '{tmp,temp}/**', '**/*.min.js', 'dist/**', 'public/**'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double']
      }
    }
  ]
}
