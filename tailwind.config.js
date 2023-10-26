const { defaultPreset } = require('tailwindcss-miniprogram-preset');

delete defaultPreset.purge;
/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [defaultPreset],
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,wxml}'],
};
