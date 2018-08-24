import fetch from "@system.fetch"
import {API_ROOT} from '../config/index'

const headers = {}
const $http = {}

const quickFetch = (url, data = null, method = 'get') =>{
    return new Promise((resolve, reject) => {
      fetch.fetch({
        url: API_ROOT + url,
        data,
        header: headers,
        method,
        success: function(data) {
          resolve(data && JSON.parse(data.data) || data)
        },
        fail: function(data, code) {
          reject(data)
        }
      })
    })
}
const getAuth = ()=> {
  return new Promise((resolve, reject) => {
    storage.get({
      key: 'auth',
      success: function(data) {
        headers.Cookie = data
        resolve(true)
      },
      fail: function(data, code) {
        resolve(false)
      }
    })
  })
}

const withAuth = (url, data = null, method = 'get', canSkip = false) =>{
  return getAuth().then((auth) => {
    if(auth || canSkip) {
      return quickFetch(url, data, method)
    } else {
      return new Promise((resolve, reject) => {
        reject('请先登录！')
      })
    }
})
}

$http.POST = (url, data = null, config = {})=> {
  if(config.withAuth) {
    return withAuth(url, data, 'post', config.canSkip)
  } else {
    return quickFetch(url, data, 'post')
  }
}
  
$http.GET = (url, data = null, config = {}) =>{
  if(config.withAuth) {
    return withAuth(url, data, 'get', config.canSkip)
  } else {
    return quickFetch(url, data, 'get')
  }
}
$http.PUT = (url, data = null, config = {}) =>{
    return quickFetch(url, data, 'put')
}



  export default $http