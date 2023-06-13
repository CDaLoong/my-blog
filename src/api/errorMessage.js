const MessageMapping = [
  {
    zh: '请求超时',
    en: 'timeout of 10000ms exceeded',
  },
  {
    zh: '网关错误',
    en: 'code 502',
  },
  {
    zh: '网络连接失败',
    en: 'Network Error',
  },
  {
    zh: '请求失败',
    en: 'Request failed',
  },
]

export function getZhMessage(errorMsg) {
  // console.log('getZhMessage');
  const result = MessageMapping.find(item => {
    return errorMsg.includes(item.en);
  });

  if (result) {
    return result.zh;
  } else {
    return errorMsg;
  }
}
