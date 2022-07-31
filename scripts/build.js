const esbuild = require('esbuild');

const { iifeConfig, miniIifeConfig, cjsConfig, esmConfig } = require('./base');

esbuild.build(iifeConfig);

esbuild.build(miniIifeConfig);

esbuild.build(cjsConfig);

esbuild.build(esmConfig);