import request from 'superagent'

function postRequest(url, form) {
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
