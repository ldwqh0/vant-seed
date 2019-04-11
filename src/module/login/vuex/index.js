import Vue from 'vue'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    /**
     * 发送验证短信
     * @param commit
     * @param params
     * @param data
     * @returns {*}
     */
    sendSms ({ commit }, { params, data }) {
      return Vue.http.post(`${CONTEXT_PATH}d/smsCodes`, data, { params }).then(({ data }) => {
        return data
      })
    },
    /**
     * 注册用户
     * @param commit
     * @param params
     * @param data
     * @returns {*}
     */
    registry ({ commit }, { params, data }) {
      return Vue.http.post(`${CONTEXT_PATH}d/registry`, data, { params }).then(({ data }) => {
        return data
      })
    },
    /**
     * 检测手机号码是否存在
     * @param commit
     * @param data
     * @returns {*}
     */
    validatePhoneNumber ({ commit }, data) {
      return Vue.http.get(`${CONTEXT_PATH}d/registry/validation`, { params: { phoneNumber: data } })
        .then(({ data }) => data)
    },
    /**
     * 获取图片验证码
     * @param commit
     * @returns {*}
     */
    verifyCode ({ commit }) {
      return Vue.http.get(`${CONTEXT_PATH}d/verifyCode`).then(({ data }) => {
        return data
      })
    },
    /**
     * 校验图片验证码
     * @param commit
     * @param params
     * @returns {*}
     */
    checkVerifyCode ({ commit }, params) {
      return Vue.http.get(`${CONTEXT_PATH}d/verifyCode/validation`, { params })
        .then(({ data }) => data)
    },
    /**
     * 校验短信验证码
     * @param commit
     * @param params
     * @returns {*}
     */
    checkSmsCode ({ commit }, params) {
      return Vue.http.get(`${CONTEXT_PATH}d/smsCodes/validation`, { params })
        .then(({ data }) => data)
    },
    /**
     * 密码重置
     * @param commit
     * @param params
     * @param data
     * @returns {*}
     */
    resetPassword ({ commit }, { params, data }) {
      return Vue.http.post(`${CONTEXT_PATH}d/registry/reset`, data, { params }).then(({ data }) => {
        return data
      })
    }
  }
}
