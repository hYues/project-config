const base = require.resolve('./base.js')

module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-typescript', base]
}
