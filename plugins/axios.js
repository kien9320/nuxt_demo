import axios from 'axios'
import Vue from 'vue'

Vue.use(axios)
export default function ({ store, app: { $axios }, redirect }) {
  $axios.onRequest((config) => {
    store.commit('core/onLoad')
    const newConfig = config
    newConfig.headers['accept-language'] =
      window.$cookies.get('language') ?? 'en'
    return config
  })

  $axios.onResponse((response) => {
    if (response.data.status) {
      if (
        response.data.message &&
        response.data.message.length > 1 &&
        response.data.message != null &&
        response.data.message !== ''
      ) {
        store.commit('core/SUCCESS_MESSAGE', response.data.message, {
          root: true,
        })
      }
      store.commit('core/outLoad')
      if (response.data.data.length >= 0 || response.data.data.data) {
        return response.data.data
      }
      return response.data
    }
    store.commit('core/outLoad')
    store.commit('core/ERROR_MESSAGE', response.data.message, {
      root: true,
    })
    return false
  })

  $axios.onError(async (error) => {
    store.commit('core/outLoad')
    const statusCode = error.response ? error.response.status : -1

    if (statusCode === 401 || statusCode === 422) {
      const refreshToken = store.state.auth.refreshToken
      if (
        error.response.data.errorCode === 'JWT_TOKEN_EXPIRED' &&
        refreshToken
      ) {
        if (
          Object.prototype.hasOwnProperty.call(error.config, 'retryAttempts')
        ) {
          return redirect('/')
        }
        const config = { retryAttempts: 1, ...error.config }
        try {
          await store.dispatch('auth/refresh')
          return Promise.resolve($axios(config))
        } catch (e) {
          return redirect('/')
        }
      }
      return redirect('/')
    }

    if (statusCode === 404) {
      // redirect( '/404' );
    }

    return Promise.reject(error)
  })
}
