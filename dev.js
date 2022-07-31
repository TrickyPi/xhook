const esbuild = require('esbuild');

const { iifeConfig, cjsConfig, esmConfig } = require('./base');

const showSuccessMsg = debounce(() => {
  console.log('rebuild succeeded')
})


const showErrorMsg = debounce(() => {
  console.log('rebuild failed')
})

const watchConfig = {
  watch: {
    onRebuild(error) {
      if (error) {
        showErrorMsg()
      }
      else {
        showSuccessMsg()
      }
    },
  }
}

function debounce(cb, time = 100) {
  let timer = null
  return (...args) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      cb(...args)
      timer = null;
    }, time)
  }
}

Promise.all([
  esbuild.build({
    ...iifeConfig,
    ...watchConfig
  }),
  esbuild.build({
    ...cjsConfig,
    ...watchConfig
  }),
  esbuild.build({
    ...esmConfig,
    ...watchConfig
  })
]).then(() => {
  console.log('Watching...')
})