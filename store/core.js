export const state = () => ({
  error: '',
  success: '',
  loadingStatus: false,
})

export const getters = {
  Error: (state) => state.error,
  Success: (state) => state.success,
  LoadingStatus: (state) => state.loadingStatus,
}

export const actions = {}

export const mutations = {
  SUCCESS_MESSAGE(state, message) {
    state.success = message
  },
  ERROR_MESSAGE(state, message) {
    state.error = message
  },
  ERROR_500(state, message) {
    state.status = message
  },
  onLoad(state) {
    this.commit('core/StatusLoad', true)
    state.totalSend += 1
  },
  outLoad(state) {
    this.commit('core/StatusLoad', false)
    state.totalReceive += 1
  },
  StatusLoad: (state, data) => {
    if (data) {
      state.loadingStatus = true
      return
    }
    state.loadingStatus = false
    state.totalSend = 0
    state.totalReceive = 0
  },
}
