const { defaultPreset } = require('tailwindcss-miniprogram-preset');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [defaultPreset],
};
