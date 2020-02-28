const path = require('path')

const custom = require('../webpack.config.js')

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions/register'],
  webpackFinal: config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    }
  }
}
