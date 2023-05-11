// rollup.config.js
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [
    terser()
  ]
};
