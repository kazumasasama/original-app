import request from '@/utils/request'

export function getCustomerInfo(token) {
  return request({
    url: 'customers',
    method: 'get',
    params: { token }
  })
}
