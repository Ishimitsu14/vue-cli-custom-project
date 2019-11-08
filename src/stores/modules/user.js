import requests from '../../requests'
import Cookies from 'js-cookie'

export default {
  state: {
    token: Cookies.get('token') || null,
  },
  getters: {
    // getUser: state => state.data,
  },
  mutations: {
    // login(state, data) {
    //   state.token = data.token
    // },
  },
  actions: {
    // login({ commit, dispatch }, user) {
    //   return new Promise((resolve, reject) => {
    //     requests.auth.login(user).then(({ data }) => {
    //       Cookies.set('token', data.token, { expires: data.remember ? 365 : null });
    //       commit('login', data)
    //       resolve(data)
    //     }).catch(({ response }) => {
    //       reject(response)
    //     })
    //   })
    // },
  },
}
