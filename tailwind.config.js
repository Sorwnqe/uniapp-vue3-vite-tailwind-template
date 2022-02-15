module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx,wxml}'],
  },
  darkMode: false,
  separator: '__',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
    space: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
  },
};
