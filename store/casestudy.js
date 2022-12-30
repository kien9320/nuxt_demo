export const GET_OUR_CASESTUDY_SUCCESS = 'GET_OUR_CASESTUDY_SUCCESS'

export const state = () => ({
  ourCaseStudy: null,
})

export const getters = {
  OurCaseStudy: (state) => state.ourCaseStudy,
}

export const actions = {
  req_getOurCaseStudy({ commit }) {
    this.$axios.get('/general/get/case-study').then((res) => {
      if (res) {
        commit('GET_OUR_CASESTUDY_SUCCESS', res)
      }
    })
  },
}

export const mutations = {
  GET_OUR_CASESTUDY_SUCCESS(state, data) {
    state.ourCaseStudy = data
  },
}
