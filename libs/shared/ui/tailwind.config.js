const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
