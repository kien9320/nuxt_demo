// import this.$axios from '@nuxtjs/this.$axios'

export const state = () => ({
  customerFb: null,
  partnerList: null,
  teamList: null,
  staffList: null,
  comprehensiveList: null,
  faqList: null,
  pressList: null,
  reasonList: null,
  contactInfo: null,
  projectImgList: null,
})

export const getters = {
  Customer: (state) => state.customerFb,
  Partner: (state) => state.partnerList,
  Team: (state) => state.teamList,
  Comprehensive: (state) => state.comprehensiveList,
  Faq: (state) => state.faqList,
  Press: (state) => state.pressList,
  Reason: (state) => state.reasonList,
  Staff: (state) => state.staffList,
  ProjectImg: (state) => state.projectImgList,
}

export const actions = {
  req_ProjectImg({ commit }) {
    this.$axios.get('/project/get/project/img').then((res) => {
      if (res) {
        commit('SET_PROJECT_IMG', res)
      }
    })
  },

  req_GetReason({ commit }) {
    this.$axios.get('/project/get/project').then((res) => {
      if (res) {
        commit('SET_REASON', res)
      }
    })
  },

  req_Press({ commit }) {
    this.$axios.get('/news/get').then((res) => {
      if (res) {
        commit('SET_PRESS', res)
      }
    })
  },

  req_getComprehensive({ commit }) {
    this.$axios.get('/service/get/list-service').then((res) => {
      if (res) {
        commit('SET_COMPREHENSIVE', res)
      }
    })
  },

  req_Faq({ commit }) {
    this.$axios.get('/general/get/faqs').then((res) => {
      if (res) {
        commit('SET_FAQ', res)
      }
    })
  },
  req_getCustomerFb({ commit }) {
    this.$axios.get('/customer/get/list').then((res) => {
      if (res) {
        commit('SET_CUSTOMER_FB', res)
      }
    })
  },

  req_Partner({ commit }) {
    this.$axios.get('/partner/get-partner').then((res) => {
      if (res) {
        commit('SET_PARTNER', res)
      }
    })
  },
  req_Team({ commit }) {
    this.$axios.get('/staff/get-all').then((res) => {
      if (res) {
        commit('SET_TEAM', res)
      }
    })
  },
  req_Staff({ commit }) {
    this.$axios.get('/staff/get-all-member').then((res) => {
      if (res) {
        commit('SET_STAFF', res)
      }
    })
  },
}

export const mutations = {
  SET_STAFF(state, data) {
    state.staffList = data
  },
  SET_PROJECT_IMG(state, data) {
    state.projectImgList = data
  },
  SET_REASON(state, data) {
    state.reasonList = data
  },
  SET_PRESS(state, data) {
    state.pressList = data
  },
  SET_FAQ(state, data) {
    state.faqList = data
  },
  SET_COMPREHENSIVE(state, data) {
    state.comprehensiveList = data
  },
  SET_CUSTOMER_FB(state, data) {
    state.customerFb = data
  },
  SET_PARTNER(state, data) {
    state.partnerList = data
  },
  SET_TEAM(state, data) {
    state.teamList = data
  },
}
