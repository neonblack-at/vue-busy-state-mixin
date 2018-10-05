import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

const input = 'src/index.js'

export default [
  {
    input,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      })
    ],
    output: {
      file: 'dist/VueBusyStateMixin.common.js',
      format: 'cjs'
    }
  },
  {
    input,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      })
    ],
    output: {
      file: 'dist/VueBusyStateMixin.esm.js',
      format: 'esm'
    }
  },
  {
    input,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      uglify()
    ],
    output: {
      file: 'dist/VueBusyStateMixin.common.min.js',
      format: 'cjs'
    }
  }
];
