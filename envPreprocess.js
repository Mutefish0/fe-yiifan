let fs = require('fs')
let environment
if(process.argv.indexOf('--development') > -1) environment = 'development'
else if(process.argv.indexOf('--production') > -1) environment = 'production'
else throw new Error('参数错误')

let webpackConfig = require('./webpack.config.js')
let staticPath = webpackConfig.output.path.replace(/([^/])$/,'$1/')
let publicPath = webpackConfig.output.publicPath.replace(/([^/])$/,'$1/')
let bundleName = webpackConfig.output.filename
let entryPath = webpackConfig.entry .replace(/(\/[^\/]*)$/, '/')


let regexVariableName = /^[a-zA-Z_][a-zA-Z0-9_]*$/

function regexFindAssignmentExpression(leftValue) {
  if(!regexVariableName.test(leftValue))
   throw new Error('左值错误')
  let regex = [
    '(',
    leftValue,
    ')\\s*=\\s*(.*)',
  ].join('')
  return new RegExp(regex)
}

function modifyRightValue(textSrc, leftValue, rightValue) {
  return textSrc.replace(regexFindAssignmentExpression(leftValue), `$1 = ${rightValue}`)
}

String.prototype.modifyRightValue = function(leftValue, rightValue) {
  return modifyRightValue(this, leftValue, rightValue)
}

// 更改index.html的bundle路径
let indexHtml = fs.readFileSync(staticPath + 'index.html', {encoding: 'utf8'})
fs.writeFileSync(staticPath + 'index.html',
  indexHtml.modifyRightValue('__ENVIRONMENT__',`\'${environment}\'`)
           .modifyRightValue('__PUBLICPATH__', `\'${publicPath}\'`)
           .modifyRightValue('__BUNDLENAME__', `\'${bundleName}\'`)
)

//更改src入口文件的环境
let envJs = fs.readFileSync(entryPath + 'env.js', {encoding: 'utf8'})
fs.writeFileSync(entryPath + 'env.js',
  envJs.modifyRightValue('__ENVIRONMENT__', `\'${environment}\'`)
)
