export function convertUrl(url, data) {
  let serverUrl = url;
  const regex = /{(.+?)}/g;

  let result = regex.exec(url);
  while (result) {
    // console.log(result);
    serverUrl = serverUrl.replace(result[0], data[result[1]]);
    result = regex.exec(url)
  }

  return serverUrl;
}
