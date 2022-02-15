const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared');
module.exports = {
  plugins: [
    require('postcss-import')({
      resolve(id) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      },
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('tailwindcss')({ config: './tailwind.config.js' }),
    require('postcss-class-rename-postcss8')({
      '\\\\.': '_',
      '\\*': 'view',
    }),

    uniPostcssPlugin(),
  ],
};
