import request from 'superagent'
import env from '../env'

let apiOrigin = env.apiOrigin

function postRequest(rest, form) {
  let url = /\:\/\//.test(rest)? rest: apiOrigin + rest
  if(form)
    return new Promise(resolve => {
      request.post(url).withCredentials().type('form').send(form).then(resp => resolve(resp.body))
    })
  else
    return new Promise(resolve => {
      request.post(url).withCredentials().then(resp => resolve(resp.body))
    })
}

export default postRequest
