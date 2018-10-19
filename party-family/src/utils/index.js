const axios = require('axios')
const qs = require('qs')
const baseURL = 'http://211.67.177.56:8080/hhdj'

const instance = axios.create({
  baseURL,
  timeout: 15000
})

const xhr = {
  get (url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch (url, data, config, methods) {
    return new Promise((resolve, reject) => {
      instance[methods](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, 'post')
  }
}

export default xhr
