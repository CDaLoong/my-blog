export default class ApiManager {
  constructor(apis) {
    // 判断接口配置文件的key和value是否重复
    // console.log('apis', apis);
    const objUrl = apis[0];
    this.urlMap = new Map();
    const valMap = new Map();

    for (const keyObj in objUrl) {
      for (const key in objUrl[keyObj]) {
        // console.log(key);
        if (this.urlMap.has(key)) {
          throw new Error('api的modules下' + keyObj + '文件，key：' + key + '重复');
        } else {
          if (valMap.has(objUrl[keyObj][key])) {
            throw new Error('api的modules下' + keyObj + '文件，url：' + objUrl[keyObj][key] + '重复');
          } else {
            this.urlMap.set(key, objUrl[keyObj][key]);
            valMap.set(objUrl[keyObj][key], objUrl[keyObj][key]);
          }
        }
      }
    }
  }

  get(key) {
    // 通过key获取真实接口地址this.urlMap
    if (this.urlMap.get(key) === undefined) {
      throw new Error('api的modules下，key：' + key + ' 没有被配置');
    }
    return '/api' + this.urlMap.get(key); // '/api/company/info';
  }
}
