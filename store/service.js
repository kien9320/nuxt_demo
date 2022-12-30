// export const GET_SERVICE_PROVIDER_SUCCESS = 'GET_SERVICE_PROVIDER_SUCCESS'

export const state = () => ({
  serviceProvider: null,
  questionList: null,
})

export const getters = {
  ServiceProvider: (state) => state.serviceProvider,
  Question: (state) => state.questionList,
}

export const actions = {
  req_getServiceProvider({ commit }) {
    this.$axios.get('/service/get/service-provider').then((res) => {
      if (res) {
        commit('GET_SERVICE_PROVIDER_SUCCESS', res)
      }
    })
  },
  req_getQuestionList({ commit }) {
    this.$axios.get('/contact/get/question-why').then((res) => {
      if (res) {
        commit('GET_QUESTION_LIST', res)
      }
    })
  },
}

export const mutations = {
  GET_QUESTION_LIST(state, data) {
    state.questionList = data
  },
  GET_SERVICE_PROVIDER_SUCCESS(state, data) {
    state.serviceProvider = data
  },
}
