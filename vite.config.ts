import { resolve } from 'path';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import postcssConfig from './postcss.config';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: 'static',
        replacement: pathResolve('src/static'),
      },
      {
        find: 'uni-ui/',
        replacement: '@dcloudio/uni-ui/lib/',
      },
    ],
  },
  css: {
    postcss: postcssConfig,
  },
  plugins: [uni()],
});
