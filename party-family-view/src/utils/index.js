import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000,
})

const xhr = {
  get(url, data, config) {
    return new Promise ((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config, method) {
    return new Promise ((resolve, reject) => {
      instance[method](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, 'post')
  },
  patch(url, data, config) {
    return this.fetch(url, data, config, 'patch')
  },
  delete(url, data, config) {
    return this.fetch(url, data, config, 'delete')
  }
}
export default xhr

