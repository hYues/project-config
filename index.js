const eslintDefault = require('./eslint/base')
const prettierDefault = require('./prettier/prettier.config')

module.exports = {
  eslint: {
    default: eslintDefault
  },
  prettier: {
    default: prettierDefault
  }
}
