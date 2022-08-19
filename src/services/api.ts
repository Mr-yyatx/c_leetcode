import request from '../utils/request';

const api = (options: any) => {
  return request({
    method: "GET",
    url: options.url,
    data: JSON.stringify(options.params)
  })
}

export const getUserInfo = (options: any) => {
  return api({ url: '/api/getUserInfo', params: options.params || {} })
}