
const { version } = require('./package.json');

const year = new Date().getFullYear();

const banner = {
  js: `//XHook - v${version} - ` +
    "https://github.com/jpillora/xhook\n" +
    `//Jaime Pillora <dev@jpillora.com> - ` +
    `MIT Copyright ${year}`,
};


const baseConfig = {
  entryPoints: ['src/main.js'],
  bundle: true,
}

const iifeConfig = {
  ...baseConfig,
  banner,
  format: 'iife',
  outfile: 'dist/xhook.js',
  globalName: 'xhook',
  sourcemap: true
}

const miniIifeConfig = {
  ...iifeConfig,
  outfile: "dist/xhook.min.js",
  minify: true
}

const cjsConfig = {
  ...baseConfig,
  format: 'cjs',
  outfile: 'lib/xhook.js'
}

const esmConfig = {
  ...baseConfig,
  format: 'esm',
  outfile: 'es/xhook.js'
}

module.exports = {
  iifeConfig,
  miniIifeConfig,
  cjsConfig,
  esmConfig
}