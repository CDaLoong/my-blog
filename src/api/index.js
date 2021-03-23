import axios from 'axios'
const service = axios.create({
  baseURL: 'http://127.0.0.1:9527', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export const getEveryday = () => {
  return service({
    method: 'get',
    url: '/editEveryday'
  })
}

export const setEveryday = (params) => {
  return service({
    method: 'post',
    url: '/editEveryday',
    params
  })
}
