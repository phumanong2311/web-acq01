/* global fetch */
import conf from '../../conf/public'
const prefix = conf.api

const defaultOpt = (method = 'GET', body = null) => {
  if (body) return { method: method, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
  else return { method: method, headers: {'Content-Type': 'application/json'} }
}

class API {
  get (url, query = {}) {
    return fetch(formatLink(url, query), defaultOpt('GET'))
      .then(responseHandler).then(resultHandler)
  }

  post (url, query = {}, body = {}) {
    return fetch(formatLink(url, query), defaultOpt('POST', body))
      .then(responseHandler).then(resultHandler)
  }

  put (url, query = {}, body = {}) {
    return fetch(formatLink(url, query), defaultOpt('PUT', body))
      .then(responseHandler).then(resultHandler)
  }

  delete (url, query = {}, body = {}) {
    return fetch(formatLink(url, query), defaultOpt('DELETE', body))
      .then(responseHandler).then(resultHandler)
  }

  basAPI () { return '/base-api' }

  apiPrefix (uri) { return prefix + uri }
}

const formatLink = (url, query) => {
  var datas = []
  for (var k in query) { datas.push(k + '=' + query[k]) }
  if (datas.length > 0) return url + '?' + datas.join('&')
  return url
}

const responseHandler = (response) => {
  if (response.status === 401) return
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

const resultHandler = (response) => {
  if (!response.status) return Promise.reject(new Error('Request api invalid'))
  if (response.status !== 200) return Promise.rejec({ error: response.message || 'request api invalid' })
  return Promise.resolve({ data: response.data })
}

export default API
