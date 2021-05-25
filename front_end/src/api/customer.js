import request from '@/utils/request'

export function getCustomerInfo(token) {
  return request({
    url: 'api/v1/customers',
    method: 'get',
    params: { token }
  })
}
