import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  external(),
  resolve({ extensions }),
  babel({ extensions, babelHelpers: "bundled" }),
  // commonjs(),
  // terser(),
  postcss({
    plugins: [autoprefixer(), cssnano()],
    extract: true,
    extensions: [".css"],
  }),
];

export default [
  {
    input: "src/App.jsx",
    output: [
      {
        file: "dist/themeToolkit.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/themeToolkit.esm.js",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins,
    external: ['react'],
  },
];
