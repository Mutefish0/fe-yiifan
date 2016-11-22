let __ENVIRONMENT__ = window.__ENVIRONMENT__

let exportObject = {
  development: {
    apiOrigin: 'http://localhost',
    dev: true
  },
  production: {
    apiOrigin: 'http://api.yiifan.xyz',
    dev: false
  }
}

export default exportObject[__ENVIRONMENT__]
