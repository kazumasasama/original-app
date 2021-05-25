import { getCustomerInfo } from '@/api/customer'

const state = {
  customerAll: []
}

const mutations = {
  SET_CUSTOMER_ALL: (state, data) => {
    state.customerAll = data
  }
}

const getters = {
  customerAll: state => state.customerAll
}

const actions = {
  // get user info
  getCustomerInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getCustomerInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_CUSTOMER_ALL', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
