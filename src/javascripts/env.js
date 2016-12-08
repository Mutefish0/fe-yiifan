let exportObject = {
  development: {
    apiOrigin: 'http://yiifan.dev',
    dev: true
  },
  production: {
    apiOrigin: 'http://api.yiifan.xyz',
    dev: false
  }
}

export default exportObject[process.env.NODE_ENV]
