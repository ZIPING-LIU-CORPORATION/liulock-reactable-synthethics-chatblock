 
const babel = require("rollup-plugin-babel");
const postcssModule = require("postcss");
const cssnanoMachines = require("cssnano");
const postcss = require('rollup-plugin-postcss');
const wpResolve = require("@rollup/plugin-node-resolve");
const autoprefixer = require("autoprefixer");
const nodeResolve = require("@rollup/plugin-node-resolve");
const scss = require("rollup-plugin-scss");
const json = require("@rollup/plugin-json");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const visualizer = require("rollup-plugin-visualizer").visualizer;
const { terser } = require("rollup-plugin-terser");
const fs = require("fs");

const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];

      return;
    }

    if (
      !excludeExtensions.some((exclude) => dir.endsWith(exclude)) &&
      extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};

export default {
  input: [...getFiles("./src", [".ts", ".tsx", ".json", ".scss"])],
  output: {
    dir: "dist",
    
    format: "es",
    exports: "named",
    sourcemap: true,

  },
  plugins: [
   
    scss({
      output: "dist/style-index.css",
      sourceMap: true,
      processor: () =>
        postcssModule([
          autoprefixer(),
          cssnanoMachines({
            preset: "default",
          }),
        ]),
      include: ["src/style.scss"],
    }),
    scss({
      output: "dist/index.css",
      sourceMap: true,
      processor: () =>
        postcssModule([
          autoprefixer(),
          cssnanoMachines({
            preset: "default",
          }),
        ]),
      include: ["src/editor.scss"],
    }),
    resolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: "./tsconfig.build.json",
      declaration: true,
      sourceMap: true,
      declarationDir: "dist",
    }),
    terser(),
    visualizer({
      filename: "bundle-analysis.html",
      open: true,
    }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    babel({
      presets: ["@babel/preset-react", "@babel/preset-typescript", "@babel/preset-env"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    wpResolve(),

    postcss({
      modules: true,
      cssnano: {
        preset: "default",
      },
    })
  ],
};
