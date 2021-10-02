import { doPost, doPostFm, doGet, doPut, doDelete, doPutFm, doJson } from './request';
import ApiManager from './apiManager';
import systemAPI from './modules/system';

export const apiManager = new ApiManager([{
  systemAPI,
}]);

export function commonReq(key, params, options) {
  const { type, ...others } = options;
  // 默认走post
  switch (type) {
    case 'post':
      return commonPost(key, params, others);
    case 'postfm':
      return commonPostFm(key, params, others);
    case 'get':
      return commonGet(key, params, others);
    case 'put':
      return commonPut(key, params, others);
    case 'putfm':
      return commonPutFm(key, params, others);
    case 'delete':
      return commonDelete(key, params, others);
    default:
      return commonPost(key, params, others);
  }
}

export function commonPost(key, params, options) {
  const url = apiManager.get(key);
  return doPost(url, params, options);
}

export function commonGet(key, params, options) {
  const url = apiManager.get(key);
  return doGet(url, params, options);
}

export function commonPut(key, params, options) {
  const url = apiManager.get(key);
  return doPut(url, params, options);
}

export function commonDelete(key, params, options) {
  const url = apiManager.get(key);
  return doDelete(url, params, options);
}

export function commonPostFm(key, params, options) {
  const url = apiManager.get(key);
  return doPostFm(url, params, options);
}

export function commonPutFm(key, params, options) {
  const url = apiManager.get(key);
  return doPutFm(url, params, options);
}

export {
  doJson as commonJson,
}
