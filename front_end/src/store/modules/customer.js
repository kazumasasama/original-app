import {
  getCustomers,
  showCustomer,
  createCustomer,
  editCustomer,
  deleteCustomer
} from '@/api/customer'

const state = {
  customerAll: [],
  name: '',
  phone_number1: '',
  phone_number2: '',
  email: '',
  post_code: '',
  prefecture: '',
  address: '',
  gender_id: '',
  birthday: '',
  memo: '',
  new_or_returning: ''
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
  // get customer list
  getCustomers({ commit, state, rootState }) {
    return new Promise((resolve, reject) => {
      getCustomers(state.token).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        let prefecture = {}
        let gender = {}
        const customers = data.map(customer => {
          // pはオブジェクトのいち行目が入る
          if (customer.prefecture) {
            prefecture = rootState.settings.prefectures.find(p => p.value === customer.prefecture)
          }
          if (customer.gender) {
            gender = rootState.settings.genders.find(g => g.value === customer.gender_id)
          }
          // const prefecture = rootState.settings.prefectures.find(p => p.value === customer.prefecture)
          // const gender = rootState.settings.genders.find(g => g.value === customer.gender)
          return {
            // スプレッド構文
            // 配列の省略　カスターマーの一行目の情報（オブジェクト）
            ...customer,
            _prefecture: prefecture ? prefecture.text : '',
            _gender: gender ? gender.text : ''
            // _prefecture: prefecture.text,
            // _gender: gender.text
          }
        })
        commit('SET_CUSTOMER_ALL', customers)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  showCustomer({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      showCustomer(data).catch(error => {
        reject(error)
      })
    })
  },
  createCustomer({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      createCustomer(data).catch(error => {
        reject(error)
      })
    })
  },
  editCustomer({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      editCustomer(data).catch(error => {
        reject(error)
      })
    })
  },
  deleteCustomer({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      deleteCustomer(data).catch(error => {
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
