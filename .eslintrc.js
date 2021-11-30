module.exports = {
  extends: [
    'plugin:wkovacs64/base',
    'plugin:wkovacs64/jest',
    'plugin:wkovacs64/typescript',
    'prettier',
  ],
  settings: {
    react: {
      // config hack to work around eslint-plugin-react crying
      version: '99999',
    },
  },
};
