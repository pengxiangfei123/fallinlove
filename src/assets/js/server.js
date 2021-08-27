/*
 * @Author: 彭祥飞(pengxiangfei)
 * @Date: 2021-08-26 22:10:08
 * @LastEditTime: 2021-08-27 10:37:18
 * @LastEditors: 彭祥飞（pengXiangfei）
 */
/* eslint-disable */
import axios from 'axios'
axios.defaults.baseURL = '/ccecc/'
axios.defaults.headers = {
  terminal: '1',
  'Content-Type': 'application/json'
}
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
* 以下是中土单点登录页面
 * @param url
 * @param data
 * @returns {Promise}
 */


const get = function (url, params = {}) {
  axios.defaults.headers = {
    terminal: '1',
    'Content-Type': 'application/json',
  }
  return new Promise((resolve, reject) => {
    params._t = Math.floor(Math.random() * (1 - 100) + 100)
    axios
      .get(url, { params: params })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


const post = function (url, data) {
  axios.defaults.headers = {
    terminal: '1',
    // 'Content-Type': 'application/x-www-form-urlencoded'
    'Content-Type': 'application/json',
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data, { arrayFormat: 'repeat' }).then(
      response => {
        console.log(response.data.errcode)
        if (response.data.errcode == '0') {
          resolve(response.data)
        } else {

        }
      },
      err => {
        reject(err)
      }
    )
  })
}
export { get, post }