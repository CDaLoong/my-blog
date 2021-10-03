import qs from 'qs';
import axios from 'axios';
import { convertUrl } from './utils';
import { getZhMessage } from './errorMessage';
import showMessage from '@/utils/showMessage';

// axios拦截器，处理返回回来的数据
const doRequest = (options) => {
  const config = Object.assign({
    timeout: 10 * 1000, // 超时时间
  }, options);

  return axios(config).then(res => {
    if (res.status === 200) {
      const result = res.data;

      if (result.status === 200) {
        return Promise.resolve(result.data);
      } else if (result.status === 300) {
        return Promise.reject(new Error({ type: 'warning', message: result.message }))
      } else if (result.status === 411) {
        Promise.reject(result);
      } else {
        return Promise.reject(new Error({ type: 'error', ...result }))
      }
    } else {
      return Promise.reject(new Error({ type: 'error', message: res.message }))
    }
  }).catch(err => {
    if (err.type === 'warning') {
      showMessage({ content: err.message, type: 'warn' })
    } else {
      const title = getZhMessage(err.message);
      const message = `${JSON.stringify(options, null, '\t')} \n\n ${err.stackTrace || ''}`;
      showMessage({ content: message, type: 'error' })
      console.error(title, message);
    }

    return Promise.reject(err)
  });
}

export function doPost(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'post',
    url,
    data,
  });

  return doRequest(settings);
}

export function doPostFm(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url,
    data: qs.stringify(data),
  });

  return doRequest(settings);
}

export function doGet(url, data, options = {}) {
  // /user/deleteUser/{id}
  const settings = Object.assign(options, {
    method: 'get',
    url: convertUrl(url, data),
    params: data,
    paramsSerializer(paramsData) {
      return qs.stringify(paramsData, { indices: false });
    }
  });

  return doRequest(settings);
}

export function doPut(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'put',
    url,
    data,
  });

  return doRequest(settings);
}

export function doDelete(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'delete',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: convertUrl(url, data),
    params: data,
    paramsSerializer(paramsData) {
      return qs.stringify(paramsData, { indices: false });
    }
  });

  return doRequest(settings);
}

export function doPutFm(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'put',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url,
    data: qs.stringify(data),
  });

  return doRequest(settings);
}

export function doJson(url) {
  return axios.get(url).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(new Error('服务器异常'));
    }
  });
}
