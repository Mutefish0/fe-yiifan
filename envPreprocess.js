let fs = require('fs')
let environment
if(process.argv.indexOf('--development') > -1) environment = 'development'
else if(process.argv.indexOf('--production') > -1) environment = 'production'
else throw new Error('参数错误')

let webpackConfig = require('./webpack.config.js')
let staticPath = webpackConfig.output.path.replace(/([^/])$/,'$1/')
let publicPath = webpackConfig.output.publicPath.replace(/([^/])$/,'$1/')
let bundleName = webpackConfig.output.filename

if(environment == 'development') {
  fs.writeFileSync(staticPath + bundleName,
    `!function(){
      window.__ENVIRONMENT__ = '${environment}';
      var script = document.createElement('script');
      script.src = '${publicPath + bundleName}';
      document.body.appendChild(script);
    }();`
  )
}

else if(environment == 'production') {
  let srcText = fs.readFileSync(staticPath + bundleName, {encoding: 'utf8'})
  fs.writeFileSync(
    staticPath + bundleName,
    `window.__ENVIRONMENT__ = '${environment}';${srcText}`
  )
}
